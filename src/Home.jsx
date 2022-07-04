import React from "react";
import {Card, Gallary} from "./Card";
import Slideshow from "./Slideshow";
import {Bestseller, Ourgallary} from "./Sdata";
import "./ComponentsCss/Card.css";
import Footer from "./Footer";
// import { NavLink } from "react-router-dom";
import ContactUs from "./ContactUs";
import About from "./About";


function Home(props) {
  // const [name, setName] = useState()

  // function Addtocart (title) {
  //   {
  //       return data.title === title
  //         ? { ...data, isFavorite: !data.isFavorite }
  //         : data;
  //     };
  //   };
  



  return (
    <>
  
      <Slideshow />
      <div className="container">
      <h1 className="Bestsproucts"> Our EveryOnes favourite </h1>
      {Bestseller.map((top) => {
        return(
            <Card
          imgsrc={top.imgsrc}
          name={top.name}
          descriptions={top.description}
         email = {props.email}
        />
        );
      })}
      </div>
      <About />
     <div className="galleryHeader">    <h1>Our Gallary</h1> </div>
      <div className="galleryimgs">
  
      {Ourgallary.map((imgs) => {
        return(
          <Gallary imgsrc={imgs.imgsrc} />
        )
      })}
      </div>
     
      <ContactUs />
      <Footer />
      
    </>
  );
}

export default Home;
