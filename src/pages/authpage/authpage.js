import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./authpage.css";

const Authpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phone,
    };

    // console.log(user);

    axios
      .post("http://localhost:8000/auth/signup", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log("Error: ", error));

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div>
      <Navbar />
      <div className="container-auth">
        <div className="signup">
          <div className="title">New to Opus?</div>
          <p>Sign up and unlock the magic!</p>
          <form onSubmit={handleSubmit}>
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
            <input
              type="tel"
              placeholder="Phone No."
              required
              value={phone}
              onChange={handlePhoneChange}
            />
            <Button authSubmit>Sign Up</Button>
          </form>
        </div>
        <div className="login">
          <div className="title">Already a user?</div>
          <p>Welcome back!</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <Button authSubmit>Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
