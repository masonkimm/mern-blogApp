import React from 'react';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar__item">
        <h3>About Me</h3>
        <img src="https://bit.ly/3BZL3V5" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          temporibus ipsa modi minus magni, tempora ratione. Ad sed repudiandae
          exercitationem ipsam labore natus, odio repellendus, corrupti culpa
          delectus sapiente officiis!
        </p>
      </div>
      <div className="SideBar__item">
        <h3>Category</h3>

        <div className="SideBar__item__list">
          <p>Life</p>
          <p>Music</p>
        </div>
        <div className="SideBar__item__list">
          <p>Sports</p>
          <p>Fashion</p>
        </div>
        <div className="SideBar__item__list">
          <p>Tech</p>
          <p>Cinema</p>
        </div>
      </div>

      <div className="SideBar__item">
        <h3>Social</h3>
      </div>
    </div>
  );
}
