import Imagetic from "../images/images/icon1.png";
import { useEffect, useState } from "react";

// Algorithm
//1 Create a list of objects (data) with card details.
//2 then Create a function Cards.
//3 then apply Loop through the data using map for every item.
//4 Create a card with an bu using image, title (h3), description (h4).
//5 Export the function and use it in appjs.

const data = [
  {
    id: 1,
    h3: "Largest Dealership  of Car",
    h4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
  },
  {
    id: 2,
    h3: "Unlimited Repair Warrenty",
    h4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
  },
  {
    id: 3,
    h3: "Insurence Support",
    h4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
  },
];
function Cards() {
  const [Profile, setProfile] = useState({
    id: "",
    name: "hi",
    desc: "",
    link: "",
  });

  // function data() {
  //     // get all profile
  //     fetch('http://localhost:8000/cars')
  //     .then((res)=>{
  //       return res.json();
  //     })
  //     .then((res)=>{
  //       setProfile(res)
  //     })
  //     .catch((error)=>{console.log(error)})

  // }
  return (
    <div id="service">
      {data.map((item) => {
        return (
          <div className="card">
            <img src={Imagetic} alt="" style={{ padding: "5%" }}></img>
            <div className="data">
              <h3>{item.h3}</h3>
              <h5>{item.h4}</h5>
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
