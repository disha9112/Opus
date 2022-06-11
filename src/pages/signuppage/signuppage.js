import React, { useState } from "react";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./signuppage.css";

const Signuppage = () => {
  const nameRegex =
    // eslint-disable-next-line
    /^[a-zA-Z\-]+$/;
  const emailRegex =
    // eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name");
    } else if (!emailRegex.test(name)) {
      alert("Please enter a valid email address");
    } else if (password.length <= 5) {
      alert("Please enter a strong password with more than 5 characters");
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
        phoneNumber: phone,
      };

      // console.log(user);

      //   axios
      //     .post("http://localhost:8000/auth/signup", user)
      //     .then((res) => console.log(res.data))
      //     .catch((error) => console.log("Error: ", error));

      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    }
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
      </div>
    </div>
  );
};

export default Signuppage;
