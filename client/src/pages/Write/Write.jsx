import React from 'react';
import './Write.css';

export default function Write() {
  return (
    <div className="Write">
      <img src="https://bit.ly/3CduMfr" alt="img to be uploaded" />
      <form className="Write__form">
        <div className="form__group">
          <label htmlFor="fileInput">
            Add Image
            <i class="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" />
        </div>
        <div className="form__group">
          <label htmlFor="titleInput">Title </label>
          <input type="title" className="titleInput" autoFocus={true} />
        </div>
        <div className="form__group">
          <label htmlFor="textInput">Text</label>
          <textarea
            type="text"
            name=""
            id=""
            cols="30"
            className="textInput"
          ></textarea>
        </div>
        <div className="">
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
