import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import './Settings.css';

export default function Settings() {
  return (
    <div className="Settings">
      <div className="Settings__container">
        <div className="container__heading">
          <span className="heading__update">Update Account</span>
          <span className="heading__delete">Delete Account</span>
        </div>
        <form action="" className="container__form">
          <label>Profile Pictue</label>
          <div className="form__profilePicture">
            <img src="https://bit.ly/3zcHEk9" alt="" />
            <label htmlFor="fileInput">
              <i className="fas fa-user-circle"></i>{' '}
              <span>Add new picture</span>
            </label>

            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <div className="form__group">
            <label htmlFor="userNameInput">UserName </label>
            <input type="userName" className="userNameInput" autoFocus={true} />
          </div>
          <div className="form__group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="emailInput" />
          </div>

          <div className="form__group">
            <label htmlFor="passwordInput">Password </label>
            <input type="password" className="passwordInput" />
          </div>

          <div className="">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
