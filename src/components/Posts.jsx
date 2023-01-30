import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POSTS_URL } from './constants';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState({ title: '', price: '' });

  useEffect(() => {
    fetch(POSTS_URL)
      .then((response) => response.json())
      .then((result) => {
        setPosts(result.data.posts);
        setFilteredPosts(result.data.posts);
      })
      .catch(console.error);
  }, []);

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        if (filter.title && post.title !== filter.title) {
          return false;
        }
        if (filter.price && post.price !== filter.price) {
          return false;
        }
        return true;
      })
    );
  }, [filter, posts]);

  return (
    <div className='posts-container'>
      <h2>Search all the strange posts</h2>
      <div className='search-container'>
        <label>
          By title:
          &nbsp;
          <input
            type='text'
            name='title'
            value={filter.title}
            onChange={handleFilter}
          />
        </label>
        <label>
          By price:
          &nbsp;
          <input
            type='text'
            name='price'
            value={filter.price}
            onChange={handleFilter}
          />
        </label>
      </div>

      <h2>All Strange Posts</h2>
      <ul>
        {filteredPosts.map((post) => {
          return (
            <li key={post._id} className='post-card'>
              <p>{post.title}</p>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>{post.location}</p>
              <p>{post.willDeliver}</p>
              <p className='username-tag'>{post.author.username}</p>
              <Link to={`/posts/${post._id}`}>
                <button>View Details</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
