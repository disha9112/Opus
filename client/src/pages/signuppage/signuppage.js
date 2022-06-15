import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../assets/signup.png";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./signuppage.css";

function Signuppage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function signUpUser(event) {
    event.preventDefault();

    const response = await fetch(
      "https://opus-live.herokuapp.com/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.userExists) {
      alert(
        "Given credentials exist in database already, please try logging in"
      );
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

  return (
    <div>
      <Navbar />
      <div className="container-auth">
        <img src={signup} alt="signup" />
        <div className="signup">
          <div className="title">New to Opus?</div>
          <p>Sign up and unlock the magic!</p>
          <form onSubmit={signUpUser}>
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={handleNameChange}
            />
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
            <Button authSubmit>Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
