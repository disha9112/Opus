import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setToggle(true);
    }
  }, [toggle]);

  async function handleLogOut() {
    localStorage.removeItem("token");
  }

  if (toggle) {
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
  } else {
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
          <Link className="btn-link" to="/profile">
            <li>Profile</li>
          </Link>
          <Link className="btn-link" to="/pomodoro">
            <li>Pomodoro</li>
          </Link>
          <Link className="btn-link" to="/notes">
            <li>Notes</li>
          </Link>
          <Link className="btn-link" to="/todos">
            <li>Todos</li>
          </Link>
          <Link onClick={() => handleLogOut()} className="btn-link" to="/">
            <li>Log Out</li>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
