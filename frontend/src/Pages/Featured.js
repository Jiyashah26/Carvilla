import Image1 from "../images/images/new-cars-model/ncm1.png";
import Image2 from "../images/images/new-cars-model/ncm2.png";
import Image3 from "../images/images/new-cars-model/ncm3.png";
import Image4 from "../images/images/new-cars-model/ncm1.png";

// Algorithm
// 1 first Import car images.
// 2 then Create a list by adding car details (name, description, price, model, image).
// 3 Create a function named as features
// 4 Apply loop through the data with the help of map for every car details.
// 6 Create a card with an image, name, price, description, and model details.
// 7 Export the function and use it in appjs.

const data2 = [
  {
    id: 1,
    h4: "BMW 6-Series Gran Coupe",
    h5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
    rupee: "$89,395",
    model: "2017 3100 MI 240HP Automatic",
    img: Image1,
  },
  {
    id: 2,
    h4: "Chevrolet Camara MWV20",
    h5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
    rupee: "$89,495",
    model: "2017 4100 MI 240HP Automatic",
    img: Image2,
  },
  {
    id: 3,
    h4: "Lamborghini V520",
    h5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
    rupee: "$89,495",
    model: "2017 4100 MI 240HP Automatic",
    img: Image3,
  },
  {
    id: 4,
    h4: "Audi A3 sedan ",
    h5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet.",
    rupee: "$89,495",
    model: "2017 4100 MI 240HP Automatic",
    img: Image4,
  },
];

function Featured() {
  return (
    <div className="Featured">
      <div className="heading">
        <h4>Checkout the FeaturedCars</h4>
        <h2>FeaturedCars</h2>
        <div className="line"></div>
      </div>
      <div id="featured">
        {data2.map((data2) => {
          return (
            <div className="card" style={{ width: "250px", border: "none" }}>
              <div
                className="images"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={data2.img} alt="" style={{ width: "80%" }}></img>
                <div
                  className="adjustment"
                  style={{
                    width: "100%",
                    borderTop: "solid 1px rgb(135, 135, 165)",
                    paddingLeft: "10px",
                    color: "rgb(153, 153, 185)",
                    wordSpacing: "4px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <h6>Modle: {data2.model}</h6>
                </div>
              </div>
              <div className="data">
                <h5>{data2.h4}</h5>
                <div
                  style={{
                    marginLeft: "1px",
                    wordSpacing: "2px",
                    color: "black",
                    textDecoration: "solid",
                    paddingLeft: "10px",
                    fontWeight: "45px",
                  }}
                >
                  {data2.rupee}
                </div>
                <h6
                  style={{ color: "rgb(153, 153, 185)", paddingLeft: "10px" }}
                >
                  {data2.h5}
                </h6>
              </div>
              <div className="line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Featured;
