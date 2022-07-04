import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ComponentsCss/Slideshow.css";

// @import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const slideImages = [
    {
      url: "../Images/slide-image-01.jpg",
      caption: "Dine With Us",
    },

    {
      url: "../Images/slide-image-02.jpg",
      caption: "Have A Great Time",
    },
    {
      url: "../Images/slide-image-03.jpg",
      caption: "Bring The Family",
    },
  ];
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="welcome-container">
                <h3 className="title">
                  Welcome To <span className="name">Spicy Kitchen</span>
                </h3>
              </div>
              <h1 className="slide-title">
                <span>{slideImage.caption}</span>
              </h1>
              <h1>
                
                <a className="icon"
                  href="https://www.facebook.com/spicykitchenjdr"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-circle"></i>
                </a>
                <a className="icon"
                  href="https://www.instagram.com/jodhpurspicykitchen/?hl=en"
                  target="_blank"
                >
                 <i className='bx bxl-instagram' ></i>
                </a>
                <a className="icon"
                 href="https://spicykitchen.in/" target="_blank">
                  <i className="bx bxl-google"></i>
                </a>
              </h1>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slideshow;
