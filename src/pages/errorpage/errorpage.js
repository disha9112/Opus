import React from "react";
import image from "../../assets/errorpage.png";
import "./errorpage.css";
import Button from "../../components/button/button.component";

const Errorpage = () => {
  return (
    <div>
      <div className="container-error">
        <img src={image} alt="page not found" width="600px" />
        <div className="tagline-error">
          <div>
            Whoops! The page you're looking for isn't available. <br />
            <br />
            But that doesn't put a full stop to your work!
          </div>
          <Button getStarted>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
