import React from "react";
import { BsPauseFill } from "react-icons/bs";
import "./pause.styles.css";

const Pause = (props) => {
  return <BsPauseFill className="pause-btn" size={70} {...props} />;
};

export default Pause;
