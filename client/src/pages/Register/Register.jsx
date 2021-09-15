import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className="Register">
      <span className="Register__title">Register</span>
      <form className="Register__form">
        <label>Username</label>
        <input
          className="Register__input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="Register__input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="Register__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="Register__button">Register</button>
      </form>
      {/* <button className="LoginButton">Login</button> */}
    </div>
  );
}
