import React, { useState, useEffect } from 'react';
import { REGISTER_URL } from './constants';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
    setPassword('');
    setUsername('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const { data } = await response.json();
      setToken(data.token);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error(error);
      console.log('ERROR: Unable to register.');
    }
  };
  if (!token) {
    return (
      <div>
        <h2 className='register-tag'>New User? Register to Join, Stranger!</h2>
        <form onSubmit={handleSubmit} className='register-form'>
          <fieldset className='register-fieldset'>
            <legend>Register</legend>
            <input
              value={username}
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            &nbsp;
            <input
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <button type='submit'>Sign Up</button>
          </fieldset>
        </form>
      </div>
    );
  } else if (token) {
    return <h2 className='thanks-tag'>Thank you for joining!</h2>;
  }
};

export default Signup;
