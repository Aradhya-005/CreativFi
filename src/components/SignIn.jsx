import React from "react";
import "../css/SignIn.css";
import googleIcon from "../assets/google-brands-solid.svg";
import twitterIcon from "../assets/x-twitter-brands-solid.svg";

const SignIn = () => {
  return (
    <div className="container">
      <h1 className="header">Login to your account</h1>
      <p className="subtext">Enter your email and password to log in</p>
      <div className="button-group">
        <button className="button">
          <img src={twitterIcon} alt="Twitter Icon" width={15} height={15} />{" "}
          Twitter
        </button>
        <button className="button">
          <img src={googleIcon} alt="Google Icon" width={15} height={15} />{" "}
          Google
        </button>
      </div>
      <div className="divider">
        <span>OR CONTINUE WITH</span>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="m@example.com"
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit" className="submit">
          <span>Log In</span>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
