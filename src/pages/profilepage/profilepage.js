import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import QuoteBlock from "../../components/quote/quote.component";
import ProfileCards from "../../components/profile-cards/profile-cards.component";
import "./profilepage.css";

function Profilepage() {
  return (
    <div>
      <Navbar />
      <div className="profilepage-title">Welcome, user!</div>
      <QuoteBlock />
      <ProfileCards />
    </div>
  );
}

export default Profilepage;
