import { NavLink } from "react-router-dom";
import "./ComponentsCss/App.css";
import React from "react";
import "./ComponentsCss/Navbar.css";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="img-tag">
          <img src="../Images/Spicy-logo.png"  alt="image"/>
        </div>
        <div className="list-group">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/menu"> Menu </NavLink>
          {/* <NavLink to="/services"> Services </NavLink> */}
          <NavLink to="/about"> About </NavLink>
          <NavLink to={props?.email ? "/menu" : "/onlineorder"}>
            <button> Order Now </button>
          </NavLink>
          <NavLink to={props?.email ? "/" : "/onlineorder"}>
            {props?.email ? props.email : "Login"}
          </NavLink>
        </div>
        {/* <NavLink to="/menu/cart" className="bagbtn">
          <i className="bx bxs-shopping-bag"></i>
        </NavLink> */}
      </nav>
    </>
  );
}

export default Navbar;

