import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./sass/main.scss";
import HomeScreen from "./pages/HomeScreen";
import ReduxWrapper from "./redux/reduxStore";
import CheckoutForm from "./components/PaymentDetails";
import Footer from "./components/Footer";
import Sidebar from "./pages/HomeScreen/SideBar";
import DoneScreen from "./pages/Done";
import CommunityBlog from "./pages/CommunityBlog";
import { Login } from "./components/login";

function App() {

  const defaultList = [
    {name: 'Eggs', price: 4.25, weight: 5, quantity: 4, inc_qty: false},
    {name: 'Ground Chicken', price: 8.95, weight: 5, quantity: 4, inc_qty: false}
  ]

  const [checkList,setCheckList] = useState<typeof defaultList>([])
  let [netPrice, setnetPrice] = useState<number>(0);

  const incQty = (idx : number) => {
    let newList = [...checkList];
    let newnet = netPrice;
    newList[idx].quantity++;
    newnet += newList[idx].price;
    setCheckList(newList);
    setnetPrice(newnet);
    newList[idx].inc_qty = true;
     
  };

  const addItem = (name : string, price : number, weight : number, quantity : number) => {
    // creating a copy of productList ;
    let newList = [...checkList];
    newList.push({ price: Number(price), name: name, weight : 100, quantity : 1, inc_qty: false });
    setnetPrice(netPrice+price)
    setCheckList(newList);
  };



  return (
    <div className="App">
      <ReduxWrapper>
        {/* <Login/> */}
        <Sidebar />
        <HomeScreen checkList={checkList} addItem={addItem} netPrice={netPrice}/>
        <CheckoutForm />
        <DoneScreen />
        <CommunityBlog />
      </ReduxWrapper>
      <Footer />
    </div>
  );
}

export default App;
