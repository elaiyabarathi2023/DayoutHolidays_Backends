import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <>
      <div className="navbar">
        <span>Home</span>
        <span>Calculator</span>
      </div>
      <div className="content">
        Welcome to this Page!
      </div>
      <div>
        <Link to="/Calculator">Go to Calculator</Link>
      </div>
    </>
  );
};

export default Welcome;
