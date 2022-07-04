import React from "react";
import About from "./About";
import Footer from "./Footer";
import "./ComponentsCss/About.css";
import { CgProfile } from "react-icons/cg";
import { Reviews } from "./Sdata";

export const AboutUs = () => {
  return (
    <div>
      <About />
      <h1 className="review-title"> What Our Coustmer Think </h1>
<div className="review-container">

      {Reviews.map((review) => {
        return (
          <div className="review-div">
           <h1 id="profile-icon"> <CgProfile /> </h1>
           <div className="review-content">
            <h4>{review.first_name}</h4>
            <h6>{review.email}</h6>
            <p>{review.comment}</p>
            </div>
          </div>
        );
      })}
      </div>

      <Footer />
    </div>
  );
};
