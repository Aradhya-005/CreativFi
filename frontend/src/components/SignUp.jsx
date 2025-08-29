import React, { useState } from "react";
import "../css/SignIn.css";
import googleIcon from "../assets/google-brands-solid.svg";
import twitterIcon from "../assets/x-twitter-brands-solid.svg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Replace the URL with your backend signup endpoint
    const res = await fetch('http://localhost:5000/api/auth/signup', { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' }, 
  body: JSON.stringify({ username, email, password }) 
});


      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Failed to register');
        setIsLoading(false);
        return;
      }

      setSuccess(true);
      setIsLoading(false);

      setTimeout(() => {
        navigate('/login');
      }, 1000);

    } catch (err) {
      setError(err.message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  // if (success) {
  //   return (
  //     <div className="container">
  //       <h1 className="header">Registration Successful!</h1>
  //       <p>Please check your email to verify your account (if applicable).</p>
  //       <p>Redirecting to <Link to="/login">Login</Link>...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <h1 className="header">Register</h1>
      <p className="subtext">
        Already have an account? <Link to="/login">Log In</Link>
      </p>

      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="john"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="m@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <button type="submit" className="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <div className="button-group">
        <button type="button" className="button" onClick={() => alert("Twitter login not implemented yet")}>
          <img src={twitterIcon} alt="Twitter Icon" width={20} height={20} /> Twitter
        </button>
        <button type="button" className="button" onClick={() => alert("Google login not implemented yet")}>
          <img src={googleIcon} alt="Google Icon" width={20} height={20} /> Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
