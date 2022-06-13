import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import QuoteBlock from "../../components/quote/quote.component";
import ProfileCards from "../../components/profile-cards/profile-cards.component";
import "./profilepage.css";

function Profilepage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar />
      <div className="profilepage-title">Welcome!</div>
      <QuoteBlock />
      <ProfileCards />
    </div>
  );
}

export default Profilepage;
