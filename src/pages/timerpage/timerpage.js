import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Pomodoro from "../../components/pomodoro/pomodoro.component";
import Settings from "../../components/settings/settings.component";
import SettingsContext from "../../contexts/settings-context";
import "./timerpage.css";

const Timerpage = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

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
        <div className="timerpage-content">
          Make use of the age-old Pomodoro Timer technique to efficiently manage
          and finish your tasks, by breaking them down into short intervals of
          time.
        </div>
        <Pomodoro />
        <Settings />
      </SettingsContext.Provider>
    </div>
  );
};

export default Timerpage;
