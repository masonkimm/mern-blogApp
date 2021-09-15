import React from 'react';
import './Post.css';

export default function Post() {
  const date = new Date();
  return (
    <div className="post">
      <img src="https://bit.ly/3EgxFh9" alt="tech pic" />

      <div className="post__category">
        <h3>category goes here</h3>
      </div>
      <div className="post__info">
        <h2 className="post__title">Title goes here</h2>
        <p className="post__date">{date.toLocaleDateString()}</p>
        <p className="post__description">
          description goes here Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Tempora, nemo? Architecto eos explicabo veniam,
          natus dolorum ea ullam quam perspiciatis! Cum, commodi. Soluta, eaque
          at nisi ab sit distinctio saepe.
        </p>
      </div>
    </div>
  );
}
