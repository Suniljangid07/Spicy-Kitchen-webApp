import React from "react";
import "./ComponentsCss/About.css";
import { NavLink } from "react-router-dom";



function About() {
  return (
    <div>
      <section id="hungry-about-us" className="section-container">
        {/* <!-- START Section Heading --> */}
        <div className="header-div">
          <header className="section-heading">
            <h2 className="section-heading-title">About Us</h2>
            <div className="section-heading-subtitle-container">
              <h4 className="section-heading-subtitle">Whats our Story?</h4>
            </div>
          </header>
        </div>
        {/* <!-- END Section Heading --> */}

        <div className="grid-container">
          {/* <!-- START Section Images --> */}
          <div className="image-section">
            <div className="rotateIn">
              <div className="about-images">
                <img
                  className="about-inset"
                  src="../Images/Gallary/aboutus-inset.jpg"
                  alt="About Inset Image"
                />
                <img
                  className="about-main"
                  src="../Images/Gallary/about-us-main.jpg"
                  alt="About Main Image"
                />
              </div>
            </div>
          </div>
          {/* <!-- END Section Images --> */}

          {/* <!-- START Section Content --> */}
          <div className="contant-section">
           
              <h4 className="header-divider ">
                It Started, Quite Simply, Like This...
              </h4>
              <p>
                Spicy kitchen is a one-stop destination for all party lovers.
              </p>
              <p>
                Spicy kitchen is a well-known multi-cuisine restaurant which has
                a distinguished name for its quality and taste of food. We
                provide sumptuous food at competitive rates. The menu at spicy
                is diverse and everything has an authentic taste while having a
                different touch. For food lovers, we have tantalizing options
                from kebabs and tandoor section. Apart from this, you can enjoy
                cuisines from the entire world on your platter. Be it Mexican,
                South-Indian, Chinese or Italian.
              </p>
              <p>
                Spicy Kitchen does not follow any fixed pattern for parties.
                Hereby, providing flexibility to guests to customize the menu as
                per their requirement. So, if you want to indulge in world-className
                cuisine and enjoy magnificent ambience and experience. Think no
                more and head to SPICY KITCHEN!!
              </p>
              {/* <!-- <a className="hungry-button" href="javascript:void(0);">Learn More</a> --> */}
              <NavLink to='/menu' >
               <button> Order Now </button>
               </NavLink>
            
          </div>
          {/* <!-- END Section Content --> */}
        </div>
      </section>
      
    
    </div>
  );
}

export default About;
