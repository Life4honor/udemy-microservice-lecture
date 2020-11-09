import PostCreate from './PostCreate';
import PostList from './PostList';
import React from 'react';

export default () => {
  return (
    <div className="container">
      <h1>CreatePost</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
