import React from 'react';
import './ArticlePost.css';

export default function ArticlePost() {
  return (
    <div className="ArticlePost">
      <button className="ArticlePost__backBtn">Back</button>
      <img src="https://bit.ly/3zcRCBH" alt="" />

      <div className="ArticlePost__container">
        <h1> Title Here</h1>

        <div className="ArticlePost__info">
          <h4>Author goes here</h4>
          <h4>created Date goes here </h4>
        </div>
        <p>
          Post goes here Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ipsam consectetur sequi illum soluta totam minima unde fuga
          sint? Sapiente officiis dolores iste doloremque, quae sunt voluptate
          in magni ratione odio.
        </p>
        <div className="ArticlePost__buttons">
          <button>
            Edit{' '}
            <span>
              <i class="fas fa-edit"></i>
            </span>
          </button>
          <button>
            Delete{' '}
            <span>
              <i class="fas fa-trash-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
