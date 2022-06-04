import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import "./authpage.styles.css";

const Authpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-auth">
        <div className="signup">
          <div className="title">New to Opus?</div>
          <p>Sign up and unlock the magic</p>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="tel" placeholder="Phone" required />
          <input type="submit" value="Submit" />
        </div>
        <div className="login">
          <div className="title">Already a user?</div>
          <p>Welcome back!</p>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Authpage;
