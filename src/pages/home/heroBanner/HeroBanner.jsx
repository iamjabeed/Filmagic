import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandlerOnclick = () => {
    navigate(`/search/${query}`);
  };

  const searchQueryHandler = (e) => {
    if (e.key == "Enter" && query.length > 0) {
      console.log("Entered", query);
      navigate(`/search/${query}`);
    } else if (query.length === 0) {
      alert("Please enter movie or TV show name");
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome..</span>
          <span className="sub-title">
            .Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movie or TV show"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchQueryHandlerOnclick}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
