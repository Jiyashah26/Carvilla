import React from "react";
import Header from "./Header";

export const FeaturedCars = () => {
  const style = {
    backgroungColor: "blue",
    margin: "40px",
  };
  return (
    <>
      <Header style={style} />
      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
};
export default FeaturedCars;
