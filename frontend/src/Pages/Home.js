import React from "react";
import Header from "./Header";
import Brands from "./Brands";
import Featured from "./Featured";
import Cards from "./Cards";

// Algorithm
// 1 Import the  components
// 2 provide a style.
// 3 Create the Home component.
// 4 Add a HeroBanner section with an overlay.
// 5 Inside the HeroBanner, add the Header.
// 6 provide a heading, and a button in the HeroBanner
// 7 Add the Cards, Featured, and Brands
// 8 Export the Home.

const Home = () => {
  const style = {
    backgroungColor: "blue",
    margin: "40px",
  };

  return (
    <>
      {/* <Header style={style} /> */}
      <div className="HeroBanner">
        <div id="overlay"></div>

        <section className="main-Section">
          <Header style={style} />
          <h1>GET YOUR DESIRE CAR IN RESONABLE PRICE</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            praesentium quaerat tenetur amet distinctio quae doloribus optio
            magni corrupti.
          </h5>
          <button>Contact Us</button>
        </section>
      </div>
      <Cards />
      <Featured />
      <Brands />
    </>
  );
};

export default Home;
