import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POSTS_URL } from './constants';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(POSTS_URL)
      .then(response => response.json())
      .then(result => {
        setPosts(result.data.posts);
      })
      .catch(console.error);
  }, []);
  
  return (
    <div className='posts-container'>
      <h2>All Strange Posts</h2>
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
              <p className='username-tag'>
                {post.author.username}
              </p>
              <Link to={`posts/${post._id}`}>
              <button>View Details</button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts;
