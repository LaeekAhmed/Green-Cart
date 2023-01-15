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

  const [item, setItem] = useState<String>('beef');
  const apiCall = (item : String) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e63110a651msh5e8eb31fb666ef8p1ff7a4jsn34d5d9fbd334',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };
    const BASE_URL = `https://edamam-food-and-grocery-database.p.rapidapi.com`;
    fetch(`${BASE_URL}/parser?ingr=${item}`, options)
      .then(response => response.json())
      .then(response => console.log(response.hints))
      .catch(err => console.error(err));
  }

  apiCall("jam");

  return (
    <div className="App">
      <ReduxWrapper>
        {/* <Login/> */}
        <Sidebar />
        <HomeScreen />
        <CheckoutForm />
        <DoneScreen />
        <CommunityBlog />
      </ReduxWrapper>
      <Footer />
    </div>
  );
}

export default App;
