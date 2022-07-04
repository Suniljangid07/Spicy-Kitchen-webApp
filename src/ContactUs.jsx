import React from 'react'
import "./ComponentsCss/ContactUS.css";
const ContactUs = () => {
  return (
    <>
    <div className="contactcard">
     <h1>Contact Us</h1>
 <div className="contactdetails">
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
          <a href="tel: +919928581111">
            +91 9928581111  <br /> +91 9829077962
          </a>
        </div>
        <div className="contact-email">
          <h2>
            <i className="bx bxl-gmail"></i>
          </h2>

          <a className="email-link" href="spicykitchen@gmail.com"></a>
          spicykitchen@gmail.com
          <br />
          puneet_80@yahoo.com
        </div>
      </div>
      </div>  
    </>
  )
}

export default ContactUs