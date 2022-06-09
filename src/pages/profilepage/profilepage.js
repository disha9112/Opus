import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import ProfileCards from "../../components/profile-cards/profile-cards.component";
import "./profilepage.css";

function Profilepage() {
  return (
    <div>
      <div className="profilepage-title">Welcome, user!</div>
      <div className="profilepage-message">Where to, today?</div>
      <Navbar />
      <ProfileCards />
    </div>
  );
}

export default Profilepage;
