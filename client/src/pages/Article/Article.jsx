import React from 'react';
import ArticlePost from '../../components/ArticlePost/ArticlePost';
import SideBar from '../../components/SideBar/SideBar';
import './Article.css';

export default function Article() {
  return (
    <div className="Article">
      <ArticlePost />
      <SideBar />
    </div>
  );
}
