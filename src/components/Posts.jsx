import React, { useState, useEffect } from 'react';
import POSTS_URL from './constants';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);
  

  return (
    <div className='posts-container'>
      <h1>All Strange Posts</h1>
      <ul>
        {posts.map(post => {
          return (
            <li key={post._id} className='post-card'>
              <p>
                {post.title}
              </p>
              <p>
                {post.description}
              </p>
              <p>
                {post.price}
              </p>
              <p>
                {post.location}
              </p>
              <p>
                {post.willDeliver}
              </p>
              <p>
                {post.author.username}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts;
