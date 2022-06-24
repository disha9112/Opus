import React from "react";
import "./footer.styles.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-left">
          <div className="footer-heading">
            Set out to achieve more, every day.
          </div>

          <p className="footer-company-name">Opus All Rights Reserved © 2022</p>

          <div className="footer-icons">
            <a href="https://github.com/disha9112">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/disha9112/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/_disha291_/">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <Link className="footer-links" to="/">
            Home
          </Link>
          <Link className="footer-links" to="/login">
            Login
          </Link>
          <Link className="footer-links" to="/contact">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
