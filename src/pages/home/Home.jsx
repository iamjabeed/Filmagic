import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import HeroFeatures from "./heroFeatures/HeroFeatures";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      {/* <HeroFeatures /> */}
      <Trending />
      <TopRated />
      <Popular />
    </div>
  );
};

export default Home;
