import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import Logo from "../../assets/FilmagicLogo (1).png";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="description">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="content">All right reserved &#169; 2023</div>
        </div>

        <div className="contactDeatils">
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
          <div className="infoText">Made with 💛 by Jabeed.</div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
