import React, { useState, useEffect } from 'react';
import { LOGIN_URL } from './constants';

const Login = () => {
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
      const response = await fetch(LOGIN_URL, {
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
      console.log('ERROR: Unable to login.');
    }
  };
  if (!token) {
    return (
      <div>
        <h2 className='login-tag'>Welcome back! Login here, Stranger!</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <fieldset className='login-fieldset'>
            <legend>Login</legend>
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
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  } else if (token) {
    return <h2 className='loggedin-tag'>You're in, enjoy!</h2>;
  }
};

export default Login;
