import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import Pomodoro from "../../components/pomodoro/pomodoro.component";
import Settings from "../../components/settings/settings.component";
import SettingsContext from "../../contexts/settings-context";
import "./timerpage.css";

const Timerpage = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <Navbar />
        <div className="timerpage">
          <div className="timerpage-content">
            Make use of the age-old Pomodoro Timer technique to efficiently
            manage your tasks, by breaking them down into short intervals of
            time.
            <br /> Scroll down to tweak the settings as per your convenience.
          </div>
          <div className="timerpage-main">
            <Pomodoro />
            <Settings />
          </div>
        </div>
      </SettingsContext.Provider>
    </div>
  );
};

export default Timerpage;
