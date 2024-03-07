// SignUp.js
import React from 'react';

const SignUp = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUp;