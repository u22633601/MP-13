import React, { useState } from 'react';

const InterestForm = ({ onSubmit }) => {
  const [interests, setInterests] = useState([]);

  const handleInterestChange = (e) => {
    const { value } = e.target;
    setInterests((prevInterests) =>
      prevInterests.includes(value)
        ? prevInterests.filter((interest) => interest !== value)
        : [...prevInterests, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(interests);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Interests</h2>
      <label>
        <input
          type="checkbox"
          value="Technology"
          checked={interests.includes('Technology')}
          onChange={handleInterestChange}
        />
        Technology
      </label>
      <label>
        <input
          type="checkbox"
          value="Sports"
          checked={interests.includes('Sports')}
          onChange={handleInterestChange}
        />
        Sports
      </label>
      <label>
        <input
          type="checkbox"
          value="Music"
          checked={interests.includes('Music')}
          onChange={handleInterestChange}
        />
        Music
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InterestForm;
