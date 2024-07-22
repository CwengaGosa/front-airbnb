import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import logo from "../../assets/logo_red.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function LoginHandler(event) {
    event.preventDefault();

    try {
      await axios.post("/login", {
        username,
        password,
      });
      alert("Login Successful!");
      setRedirect(true);
    } catch (e) {
      alert("Login failed.");
    }
  }

  if (redirect) {
    return <Navigate to={"/local-page"} />;
  }

  return (
    <div className="login">
      <img src={logo} alt="Airbnb logo" className="login_logo" />
      <h2>Login</h2>
      <form onSubmit={LoginHandler}>
        <div className="login_field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="login_field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="login_forgot">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="logins">
        <Link to={'/locations'}><button type="submit" className="login_button">
          Login User
        </button></Link>
        <Link to={'/viewlistings'}><button type="submit" className="login_button">
          Login Host
        </button></Link> 
        </div>
      </form>
    </div>
  );
};

export default Login;
