import React from 'react';
import AddPost from './AddPost';
import Posts from './Posts';

const Profile = () => {
  return (
    <div>
      <h3>Hello, this is your profile.</h3>
      <AddPost />
      <Posts />
    </div>
  )
}

export default Profile;
