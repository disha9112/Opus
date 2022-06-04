import React from "react";
import "./footer.styles.css";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <div className="footer-heading">
            Set out to achieve more, every day.
          </div>

          <p className="footer-company-name">Opus All Rights Reserved © 2022</p>

          <div className="footer-icons">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
