import React from "react";
import "./ComponentsCss/Footer.css";
function Footer() {
  return (
    <>
    <div className="main-div">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>
          Our objective is to provide hassle free services to our guest and for
          the same reason we have a one point service motto, where in we provide
          other services to our guest apart from food.
        </p>
        <div className="address">
          <h2>
            <i className="bx bx-map"></i>
          </h2>
          <p>
            Plot No. 4 & 5, Near Paliwal Eye Hospital Main Pal Road,
            <br />
            Jodhpur,Rajasthan - 342008.
          </p>
        </div>
        <div className="contact-phone">
          <h2>
            <i className="bx bxs-phone-call"></i>
          </h2>
          <a href="tel: +919928581111" style={{color: "white", textStyle: "none"}}>
            +91 9928581111 , <br /> +91 9829077962
          </a>
        </div>
        <div className="contact-email">
          <h2>
            <i className="bx bxl-gmail"></i>
          </h2>
          <a className="email-link" href="spicykitchen@gmail.com" rel="noopener noreferrer"></a>
          spicykitchen@gmail.com
          <br />
          puneet_80@yahoo.com
        </div>
      </div>
      <div className="map-detalis">
        <h1> See On Map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!Plot No : 4 &5, Main Pal Rd, Near HP Petrol Pump, Jodhpur, Rajasthan 342008"
          allowfullscreen rel="noopener noreferrer"
        ></iframe>
      </div>
      <div className="timing-details">
        <h1> Opening Time</h1>
        <ul>
          <li>
            Monday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span>10:00 AM - 11:00PM</span>
          </li>
          <li>
            Tuesday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>10:00 AM - 11:00PM</span>
          </li>
          <li>
            Wednesday &nbsp; &nbsp; &nbsp; <span> 10:00 AM - 11:00PM</span>
          </li>
          <li>
            Thursday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span> 10:00 AM - 11:00PM</span>
          </li>
          <li>
            Friday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <span> 10:00 AM - 11:00PM</span>
          </li>
          <li>
            Saturday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span> 10:00 AM - 11:00PM</span>
          </li>
          <li>
            Sunday &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span>10:00 AM - 11:00PM</span>
          </li>
        </ul>
      </div>
      
    </div>
    
                
               
             
    <div className="copyright">
    <a className="icon" rel="noopener noreferrer"
                  href="https://www.facebook.com/spicykitchenjdr"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-circle"></i>
                </a>
                <a className="icon" rel="noopener noreferrer"
                  href="https://www.instagram.com/jodhpurspicykitchen/?hl=en"
                  target="_blank"
                >
                 <i className='bx bxl-instagram' ></i>
                </a>
                <a className="icon" rel="noopener noreferrer"
                 href="https://spicykitchen.in/" target="_blank">
                  <i className="bx bxl-google"></i>
                </a>
    
    <h5>2022 © Copyright Spicy Kitchen All Rights Reserved. Designed by <span className="By-name">SUNIL JANGID.</span></h5>
    </div>
    </>
  );
}

export default Footer;
