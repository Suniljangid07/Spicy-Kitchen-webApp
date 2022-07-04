import React, { useState } from "react";
import { ACTION } from "./Menu";
// import { CartReducer } from "./Menu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./ComponentsCss/Menu.css";
import { NavLink } from "react-router-dom";
// import { myContext } from "./App";

export const CartItem = (props) => {
  // const email = useContext(myContext);
  // console.log("cart",email);
  const [value, setValue] = useState("");
  const Total = () => {
    let total = 0;
    props.cart.map((item) => (total += item.price * item.quantity));
    //  console.log("cart", cart);

    return total;
  };

  const showdiv = () => {
    if (props.trigger === false) {
      props.setTrigger(true);
    } else {
      props.setTrigger(false);
    }
  };
  // const ShowPaymentGetway = () => {
  //   return
  // }
  return (
    <React.Fragment>
      <div className="cart-value">
        <div className="cart-closebtn">
          <h3>Menu Cart Items</h3>
          <h3 onClick={showdiv} className="closebtn">
            <AiOutlineCloseSquare />
          </h3>
        </div>
        <input
          className="cart-input"
          type="search"
          onChange={(e) => setValue(e.target.value)}
        />
        {props.cart &&
          props.cart
            .filter((val) =>
              val.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((item, idx) => {
              return (
                <div className="cart-card">
                  <div key={item.id}>
                    <div className="menu-item">
                      <img src={item.imgsrc} alt="" className="menu-img" />

                      <h6 className="cart-title">{item.title}</h6>
                      <div className="cart-info">
                        <h5 className="price">₹ : {item.price}</h5>
                        {/* <h5>Quantity:{item.quantity}</h5> */}
                        {/* <button className="Orderbtn">Order Now</button> */}
                        <div className="btn-group">
                          <button
                            className="removebtn"
                            onClick={() =>
                              props.dispatch({
                                type: ACTION.DECREMENT,
                                payload: { idx: idx, id: item.id },
                              })
                            }
                          >
                            <IoMdRemove />
                          </button>
                          <h5>{item.quantity}</h5>
                          <button
                            className="addbtn"
                            onClick={() =>
                              props.dispatch({
                                type: ACTION.INCREMENT,
                                payload: {
                                  idx: idx,
                                  id: item.id,
                                },
                              })
                            }
                          >
                            <MdOutlineAdd />
                          </button>

                          <button
                            className="deletebtn"
                            onClick={() =>
                              props.dispatch({
                                type: ACTION.REMOVE_FROM_CART,
                                payload: item.id,
                              })
                            }
                          >
                            <MdDeleteForever />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        {/* <hr style={{ width: "100%", fontStyle: "bold", position: "sticky" , bottom: "60px" }} /> */}
        <div className="sub-total">
          {props.cart && <h4>Total value : ₹ {Total()}</h4>}
          <NavLink  to={props?.email ? "/paymentmode" : "/onlineorder"}>
            <button className="checkoutbtn">Check Out</button>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};
