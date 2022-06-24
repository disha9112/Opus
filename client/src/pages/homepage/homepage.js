import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../../assets/homepage.png";
import clock from "../../assets/clock.png";
import list from "../../assets/list.png";
import quote from "../../assets/quote.png";
import event from "../../assets/event.png";
import "./homepage.css";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="tagline">
          <div>Bring to life your ideas, and enhance your work efficiency.</div>
          <Link className="btn-link" to="/signup">
            <Button getStarted>Get started today.</Button>
          </Link>
        </div>
        <div className="content">
          <img src={image} alt="homepage landing" width="600px" />
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
              <img src={event} alt="event icon" width="90px" />
              <p className="why-us-para">
                Events calendar for tracking upcoming meetings
              </p>
            </div>
            <div className="content-2">
              <img src={clock} alt="clock icon" width="90px" />
              <p className="why-us-para">
                Pomodoro timer to keep tabs on your productivity
              </p>
            </div>
            <div className="content-3">
              <img src={list} alt="list icon" width="90px" />
              <p className="why-us-para">
                Notes and todos to jot down your tasks and budding ideas
              </p>
            </div>
            <div className="content-4">
              <img src={quote} alt="double quote icon" width="90px" />
              <p className="why-us-para">
                Inspiring quotes which enhance your positivity and confidence
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
