import React from "react";
import image from "../../assets/homepage.png";
import clock from "../../assets/clock.png";
import list from "../../assets/list.png";
import quote from "../../assets/quote.png";
import "./homepage.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="tagline">
          <div>Bring to life your ideas, and enhance your work efficiency.</div>
          <button className="get-started">Get started today.</button>
        </div>
        <div className="content">
          <img src={image} width="600px" />
          <p className="content-para">
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
        <div className="why-us">
          <div className="why-us-title">Why choose us?</div>
          <div className="why-us-content">
            <div className="content-1">
              <img src={clock} width="90px" />
              <p className="why-us-para">
                Timer and trackers to keep tabs on your productivity
              </p>
            </div>
            <div className="content-2">
              <img src={list} width="90px" />
              <p className="why-us-para">
                Notes and todos to jot down your tasks and budding ideas
              </p>
            </div>
            <div className="content-3">
              <img src={quote} width="90px" />
              <p className="why-us-para">
                Inspiring quotes which enhance your motivation and confidence
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
