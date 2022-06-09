import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import pomodoro from "../../assets/pomodoro-card.png";
import notes from "../../assets/notes-card.png";
import todos from "../../assets/todos-card.png";
import "./profile-cards.styles.css";

const ProfileCards = () => {
  return (
    <div className="cards-list">
      <div className="card pomodoro">
        <img src={pomodoro} />
        <Link to="/pomodoro">
          <Button authSubmit>Pomodoro</Button>
        </Link>
      </div>
      <div className="card notes">
        <img src={notes} />
        <Link to="/notes">
          <Button authSubmit>Notes</Button>
        </Link>
      </div>
      <div className="card todos">
        <img src={todos} />
        <Link to="/todos">
          <Button authSubmit>Todos</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCards;
