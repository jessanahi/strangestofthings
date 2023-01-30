import React, { useState, useEffect } from 'react';
import { POSTS_URL } from './constants';

const AddPost = () => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(POSTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver,
          },
        }),
      });

      const { data } = await response.json();
      setPost(data.post);
    } catch (error) {
      console.error(error);
      console.log('ERROR: Unable to post your strange.');
    }
    setTitle('');
    setDescription('');
    setPrice('');
    setLocation('');
    setWillDeliver(false);
  };

  return (
    <div>
      <h2>Add your strange wares here</h2>
      <form onSubmit={handleSubmit} className='new-post-form'>
        <fieldset>
          <legend>Post New Strangeness</legend>
          <input
            value={title}
            type='text'
            placeholder='Title Your Strange'
            onChange={(e) => setTitle(e.target.value)}
          />
          &nbsp;
          <input
            value={description}
            type='text'
            placeholder='Describe Your Strange'
            onChange={(e) => setDescription(e.target.value)}
          />
          &nbsp;
          <input
            value={price}
            type='text'
            placeholder='Price'
            onChange={(e) => setPrice(e.target.value)}
          />
          &nbsp;
          <input
            value={location}
            type='text'
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
          &nbsp;
          <label>Delivery available: </label>
          <input
            value={willDeliver}
            type='checkbox'
            onChange={(e) => setWillDeliver(e.target.value)}
          />
          &nbsp;
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddPost;
