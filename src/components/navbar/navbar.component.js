import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <Link to="/">
          <div className="nav-title">Opus</div>
        </Link>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <Link className="btn-link" to="/signup">
          <li>Sign Up</li>
        </Link>
        <Link className="btn-link" to="/login">
          <li>Log In</li>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
