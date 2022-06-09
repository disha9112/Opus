import React, { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../../contexts/settings-context";
import "./settings.styles.css";

const Settings = () => {
  const settingsValues = useContext(SettingsContext);

  return (
    <div className="settings-container">
      <div className="settings-work">
        {" "}
        Work Duration: {settingsValues.workMinutes}:00
      </div>
      <div className="work-slider">
        <ReactSlider
          className={"slider"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsValues.workMinutes}
          onChange={(newValue) => settingsValues.setWorkMinutes(newValue)}
          min={1}
          max={120}
        />
      </div>
      <div className="settings-break">
        {" "}
        Break Duration: {settingsValues.breakMinutes}:00
      </div>
      <div className="work-slider">
        <ReactSlider
          className={"slider"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsValues.breakMinutes}
          onChange={(newValue) => settingsValues.setBreakMinutes(newValue)}
          min={1}
          max={120}
        />
      </div>
    </div>
  );
};

export default Settings;
