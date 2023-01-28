import React from 'react';

const Navibar = () => {
  return (
    <div>
      <nav>
        <h2 className='title'>STRANGER(S) THINGS</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/signup'>Signup</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
          <li>
            <a href='/posts'>Posts</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navibar;
