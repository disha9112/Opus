import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Play from "../play/play.component";
import Pause from "../pause/pause.component";
import "./pomodoro.styles.css";
import SettingsContext from "../../contexts/settings-context";

const Pomodoro = () => {
  const settingsValues = useContext(SettingsContext);

  const [paused, setPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const pausedRef = useRef(paused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function changeMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        nextMode === "work"
          ? settingsValues.workMinutes * 60
          : settingsValues.breakMinutes * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsValues.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (pausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return changeMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsValues]);

  const totalSeconds =
    mode === "work"
      ? settingsValues.workMinutes * 60
      : settingsValues.breakMinutes * 60;
  const percentage = Math.floor((secondsLeft / totalSeconds) * 100);

  const displayMinutes = Math.floor(secondsLeft / 60);
  let displaySeconds = secondsLeft % 60;

  displaySeconds =
    displaySeconds < 10
      ? (displaySeconds = "0" + displaySeconds)
      : displaySeconds;

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-timer">
        <CircularProgressbar
          value={percentage}
          text={displayMinutes + ":" + displaySeconds}
          styles={buildStyles({
            pathColor: mode === "break" ? "#5aba89" : "#00575c",
            textColor: "#000000",
            trailColor: "#e1f396",
          })}
        />
      </div>
      <div className="pomodoro-buttons">
        {paused ? (
          <Play
            onClick={() => {
              setPaused(false);
              pausedRef.current = false;
            }}
          />
        ) : (
          <Pause
            onClick={() => {
              setPaused(true);
              pausedRef.current = true;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
