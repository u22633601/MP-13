import React, { useState } from 'react';

const PasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PasswordForm;
