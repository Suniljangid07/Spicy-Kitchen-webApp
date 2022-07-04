import React from "react";
import { NavLink } from "react-router-dom";
import "./ComponentsCss/Card.css";
// import LoginForm from "./SignUp";
export function Card(props) {
  return (
    <>
    
      <div className="card">
        <img
          src={props.imgsrc}
          alt="image"
          className="card__img"
        />
        <div className="card__info">
          <h3 className="card__title">{props.name}</h3>
          <p className="details">{props.descriptions}</p>
          <NavLink to='/menu' >
         <button className="Orderbtn" >Order Now</button>
          </NavLink>
        
         
         
        </div>
      </div>
     
    </>
  );
}


export function Gallary(props) {
  return(
    <div className="gallaryimg">
      <img src={props.imgsrc} />
    </div>
  )
}
