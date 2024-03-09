import React, { useState } from 'react';

const SubInterestForm = ({ onSubmit }) => {
  const [subInterests, setSubInterests] = useState([]);

  const handleSubInterestChange = (e) => {
    const { value } = e.target;
    setSubInterests((prevSubInterests) =>
      prevSubInterests.includes(value)
        ? prevSubInterests.filter((subInterest) => subInterest !== value)
        : [...prevSubInterests, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(subInterests);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Sub-Interests</h2>
      <label>
        <input
          type="checkbox"
          value="Football"
          checked={subInterests.includes('Football')}
          onChange={handleSubInterestChange}
        />
        Football
      </label>
      <label>
        <input
          type="checkbox"
          value="Basketball"
          checked={subInterests.includes('Basketball')}
          onChange={handleSubInterestChange}
        />
        Basketball
      </label>
      <label>
        <input
          type="checkbox"
          value="Rock"
          checked={subInterests.includes('Rock')}
          onChange={handleSubInterestChange}
        />
        Rock Music
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubInterestForm;
