import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./loginpage.css";

const Loginpage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function logInUser(event) {
    event.preventDefault();

    const response = await fetch("https://opus-live.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.userExists === false) {
      alert("Given credentials don't exist in database, please try signing up");
    } else {
      if (!data.isPasswordValid) {
        alert("Incorrect password, please try again");
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
          // window.location.href = "/profile";
          navigate("/profile");
        } else {
          alert("Please check the data entered");
        }
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container-auth">
        <img src={login} alt="login" />
        <div className="login">
          <div className="title">Already a user?</div>
          <p>Welcome back!</p>
          <form onSubmit={logInUser}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <Button authSubmit>Log In</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
