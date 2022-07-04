import React from "react";
import { AllMenu } from "./Sdata";
import "./ComponentsCss/Menu.css";
// import { ACTION } from "./Menu";
import { Menuitem } from "./Menuitem";

export const Menucards = ({ dispatch }) => {
  return (
    <>
      <div id="main">
        <h2 className="menu-category-name"> Our Recommended</h2>
        <section id="recommended">
          <div className="menu-card">
            {AllMenu.map((item) => {
              if (item.category === "Our Recommended") {
                return (
                  <>
                    <Menuitem dispatch={dispatch} item={item} />
                  </>
                );
              }
              return <></>;
            })}
          </div>
        </section>
        <h2 className="menu-category-name"> Starter </h2>
        <section id="starter">
          <div className="menu-card">
            {AllMenu.map((item) => {
              if (item.category === "starter") {
                return (
                  <>
                    <Menuitem dispatch={dispatch} item={item} />
                  </>
                );
              }
              return <></>;
            })}
          </div>
        </section>
        <h2 className="menu-category-name"> Main Course </h2>
        <section id="maincourse">
          <div className="menu-card">
            {AllMenu.map((item) => {
              if (item.category === "Main course") {
                return (
                  <>
                    <Menuitem dispatch={dispatch} item={item} />
                  </>
                );
              }
              return <></>;
            })}
          </div>
        </section>
        <h2 className="menu-category-name">Desert </h2>
        <section id="desert">
          <div className="menu-card">
            {AllMenu.map((item) => {
              if (item.category === "desert") {
                return (
                  <>
                    <Menuitem dispatch={dispatch} item={item} />
                  </>
                );
              }
              return <></>;
            })}
          </div>
        </section>
        <h2 className="menu-category-name"> Ice Creams</h2>
        <section id="icecreams">
          <div className="menu-card">
            {AllMenu.map((item) => {
              if (item.category === "Ice Creams") {
                return (
                  <>
                    <Menuitem dispatch={dispatch} item={item} />
                  </>
                );
              }
              return <></>;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

// <div className="itemcard">
//             <img src={item.imgsrc} alt="" className="card__img" />

//             <h3 className="menu-title">{item.title}</h3>
//             <div className="menu-info">
//               <p className="price">₹ : {item.price}</p>

//               <button
//                 className="add-cart-btn"
//                 onClick={() =>
//                   dispatch({
//                     type: ACTION.ADD_TO_CART,
//                     payload: {
//                       id: item.id,
//                       imgsrc: item.imgsrc,
//                       title: item.title,
//                       price: item.price,
//                       quantity: 1,
//                     },
//                   })
//                 }
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
