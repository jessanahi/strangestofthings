import React, { useState, useEffect } from 'react';
import AddPost from './AddPost';
import Posts from './Posts';
import { USER_URL } from './constants';

const Profile = () => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch(USER_URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(response => response.json())
      .then(result => {
        setUser(result.data.user);
        console.log(result);
      })
      .catch(console.error);
    }, [token]);

  return (
    <div>
      <h3 className='welcome-user-tag'>Welcome,</h3>

      <AddPost />
      <Posts />
    </div>
  )
}

export default Profile;
