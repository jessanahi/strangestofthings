import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = () => {
  return (
    <div>
      <h3>Strange Post Details</h3>
      <button>
        <Link to='/posts'>Return to Main List</Link>
      </button>
    </div>
  );
};

export default SinglePost;
