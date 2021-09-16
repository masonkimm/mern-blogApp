import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar({ user }) {
  return (
    <div className="TopBar">
      <div className="TopBar__left">
        MERN-Stack Blog App
        {/* <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i> */}
      </div>
      <div className="TopBar__center">
        <div className="">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div className="">About</div>
        <div className="">Contact</div>
        <div className="">
          {' '}
          <Link to="/write" className="link">
            Write New
          </Link>
        </div>
      </div>
      <div className="TopBar__right">
        {user ? (
          <div className="">Log Out</div>
        ) : (
          <div className="">
            {' '}
            <Link to="/login" className="link">
              Log In
            </Link>
          </div>
        )}

        {user ? (
          <Link to="/settings" className="link">
            <img
              className="TopBar__right__image"
              src="https://bit.ly/3zcHEk9"
              alt=""
            />
          </Link>
        ) : (
          <Link to="/register" className="link">
            Register
          </Link>
        )}

        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}
