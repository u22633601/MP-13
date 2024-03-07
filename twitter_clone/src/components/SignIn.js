// SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styling/SignIn.css';

const SignIn = () => {
  return (
    <div className='signInContainer'>
      <h2>Sign In Page</h2>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SignIn;
