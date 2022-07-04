import React from "react";
import { ACTION } from "./Menu";
export const Menuitem = (props) => {
  const item = props.item ;
  const dispatch = props.dispatch;
  return (
    <div>
      <div className="itemcard" >
        <img src={item.imgsrc} alt="" className="card__img" />

        <h3 className="menu-title">{item.title}</h3>
        <div className="menu-info">
          <p className="price">₹ : {item.price}</p>

          <button
            className="add-cart-btn"
            onClick={() =>
              dispatch({
                type: ACTION.ADD_TO_CART,
                payload: {
                  id: item.id,
                  imgsrc: item.imgsrc,
                  title: item.title,
                  price: item.price,
                  quantity: 1,
                },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
