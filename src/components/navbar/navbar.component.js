import React from "react";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title">Opus</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <li>Login</li>
        <li>Contact Us</li>
      </div>
    </nav>
  );
};

export default Navbar;
