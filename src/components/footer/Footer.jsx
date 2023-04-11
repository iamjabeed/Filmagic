import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        {/* <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul> */}
        <div className="infoText">Made with 💛 by Jabeed</div>
        <div className="socialIcons">
          <a
            href="https://instagram.com/iamjabeed_04"
            target="_blank"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/iamlord04"
            target="_blank"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/iamjabeed"
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
