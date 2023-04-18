import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <div className="heading">
          <h2>Oops! Page Not Found 😒!</h2>
        </div>
        <div className="home-btn">
          <a href="/">Go to Home</a>
        </div>
        ;
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
