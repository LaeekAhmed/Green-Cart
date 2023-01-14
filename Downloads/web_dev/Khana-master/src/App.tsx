import React from "react";
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

function App() {
  return (
    <div className="App">
      <ReduxWrapper>
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
