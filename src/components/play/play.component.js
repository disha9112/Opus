import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./play.styles.css";

const Play = (props) => {
  return <BsFillPlayFill className="play-btn" size={70} {...props} />;
};

export default Play;
