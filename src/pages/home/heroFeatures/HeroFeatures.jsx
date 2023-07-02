import React from "react";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroFeatures = () => {
  return (
    <ContentWrapper>
      <div className="container">
        <div className="img-parent">
          <div className="img-div img-1">
            <img src="../../../../public/bb.jpg" alt="bb" />
          </div>
          <div className="img-div img-2">
            <img src="../../../../public/got.jpg" alt="got" />
          </div>
          <div className="img-div img-3">
            <img src="../../../../public/vk.jpg" alt="vk" />
          </div>
          <div className="img-div img-4">
            <img src="../../../../public/st.jpg" alt="st" />
          </div>
        </div>
        <div className="description">
          <h1>
            Timeless Classics: <br/> Explore the Greatest Evergreen
            <br/>  Movies and TV
            Shows 📽️.
          </h1>
          <p>
            Step into the world of timeless classics and discover a curated
            collection of the greatest evergreen movies and TV shows. From
            captivating dramas to thrilling adventures, these enduring favorites
            have stood the test of time and continue to enthrall audiences of
            all ages.
          </p>
          <button>Keep exploring</button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HeroFeatures;
