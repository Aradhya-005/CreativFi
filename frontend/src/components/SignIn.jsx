import React, { useState } from "react";
import "../css/SignIn.css";
import googleIcon from "../assets/google-brands-solid.svg";
import twitterIcon from "../assets/x-twitter-brands-solid.svg";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.REACT_APP_BACKEND_URL;


  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to sign in");
        setIsLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);

      setIsLoading(false);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Login to your account</h1>
      <p className="subtext">
        Enter your email and password to log in or{" "}
        <Link to="/register">create an account</Link>
      </p>

      <div className="button-group">
        <button
          type="button"
          className="button"
          onClick={() => alert("Twitter login not implemented yet")}
        >
          <img src={twitterIcon} alt="Twitter Icon" width={20} height={20} />{" "}
          Twitter
        </button>
        <button
          type="button"
          className="button"
          onClick={() => alert("Google login not implemented yet")}
        >
          <img src={googleIcon} alt="Google Icon" width={20} height={20} />{" "}
          Google
        </button>
      </div>

      <div className="divider">
        <span>OR</span>
      </div>

      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="m@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          autoComplete="current-password"
        />

        <button type="submit" className="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
