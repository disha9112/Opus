import React from "react";
import Button from "../../components/button/button.component";
import Navbar from "../../components/navbar/navbar.component";
import "./loginpage.css";

const Loginpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-auth">
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

export default Loginpage;
