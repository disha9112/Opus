import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./play.styles.css";

const Play = (props) => {
  return <BsFillPlayFill className="play-btn" size={100} {...props} />;
};

export default Play;
