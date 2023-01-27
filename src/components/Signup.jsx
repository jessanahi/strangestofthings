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
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            });
            console.log(response);
            const { data } = await response.json();
            console.log(data);
            setToken(data.token);

            localStorage.getItem('token', data.token);
            console.log('token', data.token);
        } catch (error) {
            console.error(error);
            console.log('ERROR: Unable to register.');
        }
    }

    return (
        <div>
            <h2>New User? Register to Join, Stranger!</h2>
            <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register</legend>
          <input
            value={username}
            placeholder='Username'
            onChange={setUsername}
          />
          &nbsp;
          <input
            value={password}
            type='password'
            placeholder='Password'
            onChange={setPassword}
          />
          &nbsp;
          <button type='submit'>Sign Up</button>
        </fieldset>
      </form>
        </div>
    )
};

export default Signup;