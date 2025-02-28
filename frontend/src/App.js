
import './App.scss';  

import Footer from "./Pages/Footer";
import {  Route, Routes } from "react-router-dom";
import Createfeatures from "./Pages/Createfeatures";
import Createservice  from "./Pages/Createservice";
import FeaturedCars from "./Pages/Featuredcars";
import Home from "./Pages/Home";
import About from './Pages/About';

// Algoridum
// 1 firstly use header header
// 2 then use section
// 3 then cards
// 4 then express the features of the cars
// 5 then brand logo
// 6 and the last one is footer

function App() {
  return (
    <>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createfeatures" element={<Createfeatures />} />
            <Route path="/FeaturedCars" element={<FeaturedCars />} />
            <Route path="/create-service" element={<Createservice />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      <Footer />

      {/* Floating Button */}
      <a className="floating" href="#" title="Scroll to top">
        /\{" "}
      </a>
    </>
  );
}

export default App;
