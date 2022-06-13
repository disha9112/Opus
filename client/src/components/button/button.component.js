import React from "react";
import "./button.styles.css";

const Button = ({ children, getStarted, authSubmit }) => {
  return (
    <div>
      <button
        className={`${getStarted ? "get-started" : ""} ${
          authSubmit ? "auth-submit" : ""
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
