import React from "react";
import "./ComponentsCss/App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
// import Services from "./Services";
import Error from "./Error";
import SignUp from "./SignUp";
import Login from "./Login";
import { AboutUs } from "./AboutUs";
// import {  CartItem } from "./Cart";
import { Payment } from "./Payment";

// export const myContext = createContext();
function App() {
  // const [login, setLogin] =useState(true);
  
  // email set on navbar
  const [data, setData] = React.useState({ email: null, password: null });
  let d = localStorage.getItem("item");
  React.useEffect(() => {
   
    if (d) {
      setData(JSON.parse(d));
     
    }
  }, []);


  return (
    <>
    
      <Navbar email={data.email} />
      <Routes>
        <Route path="/" element={<Home email={data.email} />} />
        <Route path="menu" element={<Menu  email={data.email} />} />   
        {/* <Route path="services" element={<Services />} /> */}
        <Route path="about" element={<AboutUs />} />
        <Route path="onlineorder" element={<Login  />} />
        <Route path="onlineorder/signup" element={<SignUp />} />
        <Route path="paymentmode" element={<Payment />} />
        {/* <Route path="menu/cart" element={<CartItem />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
