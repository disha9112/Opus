import React from "react";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./authpage.css";

const Authpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-auth">
        <div className="signup">
          <div className="title">New to Opus?</div>
          <p>Sign up and unlock the magic!</p>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="tel" placeholder="Phone No." required />
          <Button authSubmit>Submit</Button>
        </div>
        <div className="login">
          <div className="title">Already a user?</div>
          <p>Welcome back!</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <Button authSubmit>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
