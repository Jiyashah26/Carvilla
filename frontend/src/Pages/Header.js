import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Algorithm
// 1 Import useState, Link, and useNavigate
// 2  Define a function
// 3 Create a header
// 4 Add a logo inside the header.
// 5 Create a search bar with an input field and a submit button.
// 6 Export the Header component.

function Header({ stl }) {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    navigate("/search/" + query);
  };

  return (
    <header style={stl}>
      <div className="logo">
        <h2>CARVILLA</h2>
      </div>

      <div className="search-container">
        <form onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search Your Car..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <a href="#service">Service</a>
        <Link to="/about">About</Link>
        <a href="#featured">FeaturedCars</a>
        <Link to="/createfeatures">CreateFeatures</Link>
        <Link to="/create-service">CreateService</Link>
      </nav>
    </header>
  );
}

export default Header;
