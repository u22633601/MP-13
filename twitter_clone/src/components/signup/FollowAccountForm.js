import React, { useState } from 'react';

const FollowAccountForm = ({ onSubmit }) => {
  const [accounts, setAccounts] = useState([]);

  const handleAccountChange = (e) => {
    const { value } = e.target;
    setAccounts((prevAccounts) =>
      prevAccounts.includes(value)
        ? prevAccounts.filter((account) => account !== value)
        : [...prevAccounts, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(accounts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Follow Accounts</h2>
      <label>
        <input
          type="checkbox"
          value="OpenAI"
          checked={accounts.includes('OpenAI')}
          onChange={handleAccountChange}
        />
        OpenAI
      </label>
      <label>
        <input
          type="checkbox"
          value="Twitter"
          checked={accounts.includes('Twitter')}
          onChange={handleAccountChange}
        />
        Twitter
      </label>
      <label>
        <input
          type="checkbox"
          value="Google"
          checked={accounts.includes('Google')}
          onChange={handleAccountChange}
        />
        Google
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FollowAccountForm;
