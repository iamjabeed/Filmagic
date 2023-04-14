import React from "react";
import "./style.scss";
const NotFound = () => {
  return (
    <div className="notFound-page">
      <div className="heading">
        <h2>Oops! You have enterd wrong path 😒!</h2>
      </div>
      <div className="home-btn">
        <a href="/">Go to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
