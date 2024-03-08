import React, { useState } from 'react';
import { supabase } from "@config/supabase";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null); // State to store user data

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up:', user);
      console.log(user);
      setUserData(user); // Update user data state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      {userData && ( // Conditionally render user data if available
        <div>
          <h2>User Data:</h2>
          <p>Email: {userData.email}</p>
          <p>UID: {userData.id}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default SignUp;