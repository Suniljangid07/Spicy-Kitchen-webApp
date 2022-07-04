import React, {  useReducer, useState } from "react";
import { CartItem } from "./Cart";
import "./ComponentsCss/Menu.css";
import { Menucards } from "./Menucards";

export const ACTION = {
  ADD_TO_CART: "add_to_cart",
  REMOVE_FROM_CART: "remove_from_cart",
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
export function CartReducer(state, action) {
  const newState = [...state];
  const productIndex = newState.findIndex((val) => val.id === action.payload.id);

  switch (action.type) {
    case ACTION.ADD_TO_CART:
      if (productIndex < 0) {
        newState.push(action.payload);
      } else newState[productIndex].quantity++;
      
      return newState;
    case ACTION.INCREMENT:
      newState[action.payload.idx].quantity++;
      return newState;
    case ACTION.DECREMENT:
      if (newState[action.payload.idx].quantity > 1)
        newState[action.payload.idx].quantity--;
      else return newState.filter((item) => item.id !== action.payload.id);
      return newState;
    case ACTION.REMOVE_FROM_CART:
      return newState.filter((item) => item.id !== action.payload);
    default:
      return;
  }
}
// export const myContext = createContext();
function Menu(props) {
  const [cart, dispatch] = useReducer(CartReducer, []);
 const[trigger, setTrigger] = useState(false)
 

 
  const showdiv = () => {
    if (trigger === false){
       setTrigger(true);
      //  style={{ background: 'transparent' }}
    } else {
      setTrigger(false);
    }
  };

  return (
 
    <>
  
  
      <div className="sidebar">
        <a href="/menu#recommended"> Recommended </a>
        <a href="/menu#starter">Starter</a>
        <a href="/menu#maincourse">Main Course</a>
        <a href="/menu#desert">Desert</a>
        <a href="/menu#icecreams">Ice Creams</a>
      </div>
      <section id="recommended">
        <Menucards dispatch={dispatch} />
      </section>
      {trigger ? "" : <a onClick={showdiv} className="bagbtn" >
    <i className="bx bxs-shopping-bag"></i>
  </a> }
 
     {trigger ? <CartItem dispatch={dispatch} cart={cart} trigger={trigger} setTrigger={setTrigger} email={props.email} /> : ""}
    </>
  );
}

export default Menu;


