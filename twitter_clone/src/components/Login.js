// Login.js
import React from 'react';

const Login = () => {
  return (
    <form>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;