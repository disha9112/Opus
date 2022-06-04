import React from "react";
import image from "../../assets/homepage.png";
import "./homepage.styles.css";

const Homepage = () => {
  return (
    <div className="container">
      <div className="tagline">
        <div>Bring to life your ideas, and enhance your work efficiency.</div>
        <button className="get-started">Get started today.</button>
      </div>
      <div className="content">
        <img src={image} width="600px" />
        <p>
          Stay at the top of your game always, with Opus. <br />
          <br />
          Choose from a wide array of features to organize your tasks and
          projects.
          <br />
          <br />
          With just a few clicks, begin a productive journey and inculcate a
          good work ethic.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
