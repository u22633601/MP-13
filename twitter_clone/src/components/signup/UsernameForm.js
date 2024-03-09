import React, { useState } from 'react';

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UsernameForm;
