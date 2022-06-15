import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import QuoteBlock from "../../components/quote/quote.component";
import ProfileCards from "../../components/profile-cards/profile-cards.component";
import "./profilepage.css";

function Profilepage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  async function handleGetUser() {
    const response = await fetch(
      "https://opus-live.herokuapp.com/auth/getUser",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const data = await response.json();

    if (data.status === true) {
      setName(data.name);
    } else {
      alert("Error retrieving user details");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      handleGetUser();
    }
  });

  return (
    <div>
      <Navbar />
      <div className="profilepage-title">Welcome, {name}!</div>
      <QuoteBlock />
      <ProfileCards />
    </div>
  );
}

export default Profilepage;
