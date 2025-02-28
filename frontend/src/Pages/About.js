import React from "react";
import Header from "./Header";

const style = {
  header: { backgroundColor: "#0056b3", display: "flex" },
  a: {
    textDecoration: "none",
    color: "white",
  },
  Link: {
    textDecoration: "none",
    color: "white",
  },
};

export const About = () => {
  return (
    <>
      <div style={style.header}>
        <Header />
      </div>

      <div className="About">
        <h1>Hello People!!!</h1>
        <p>
          My self Kazi Tehseen Kader, as I'm a Beginner Developer in the MERN
          Stack Field. I have completed my B.Com in Commerce from Mumbai
          University in the year 2024-2025 and applied for the course of MERN
          Stack at Vocab Institute.
        </p>
        <p>
          This is the final project of our course where we created a responsive
          website, designed to apply advanced concepts such as SCSS, React.js,
          floating buttons, and overlays. It follows a structured approach to
          website development and includes CRUD functionality for managing
          information. It ensures dynamic content updates and efficient data
          handling by fetching data from the backend using React.js, SCSS,
          JavaScript, MongoDB, and Express.js (API creation).
        </p>
      </div>
    </>
  );
};

export default About;
