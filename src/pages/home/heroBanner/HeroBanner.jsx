import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandlerOnclick = () => {
    navigate(`/search/${query}`);
  };

  const searchQueryHandler = (e) => {
    if (e.key == "Enter" && query.length > 0) {
      // console.log("Entered", query);
      navigate(`/search/${query}`);
    } else if (query.length === 0) {
      alert("Please enter movie or TV show name");
    }
  };

  //* Custome hook for fetching api

  const { data, loading } = useFetch("/movie/upcoming");
  // console.log(data);
  // console.log(loading);

  //? To access the url in store(redux)
  const { url } = useSelector((store) => store.home);
  // console.log(url);

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    // console.log(bg);
  }, [data]);
  return (
    <div className="heroBanner">
      {/* Lazy loading (Img) */}
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>

      <ContentWrapper>
        {/* <div className="wrapper"> */}
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="sub-title">
            Millions of movies, TV shows and people to discover. Explore now.
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
        {/* </div> */}
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;