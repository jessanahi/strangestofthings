import React, { useState, useEffect } from 'react';
import { POSTS_URL, TOKEN_STORAGE_KEY } from './constants';

const AddPost = () => {
  const [post, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  useEffect(() => {
    setTitle('');
    setDescription('');
    setPrice('');
    setWillDeliver(false);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(POSTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN_STORAGE_KEY}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
          },
        }),
      });
      const { data } = await response.json();
      setPosts(data.post);
    } catch (error) {
      console.error(error);
      console.log('ERROR: Unable to post your strange.');
    }
  };
  return (
    <div>
        <h2>Add your strange wares here.</h2>
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Submit Post</button>
          </fieldset>
        </form>
    </div>
  )
};

export default AddPost;
