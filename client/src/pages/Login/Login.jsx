import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="Login">
      <span className="Login__title">Login</span>
      <form className="Login__form">
        <label>Email</label>
        <input
          className="Login__input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="Login__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="Login__button">Login</button>
      </form>
      {/* <button className="loginRegisterButton">Register</button> */}
    </div>
  );
}
