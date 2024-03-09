import React, { useState } from 'react';

const SignUpForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const handleToggle = () => {
    setIsEmail(!isEmail);
    setEmailOrPhone('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, emailOrPhone, month, day, year });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      {isEmail ? (
        <label>
          Email:
          <input type="email" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} required />
        </label>
      ) : (
        <label>
          Phone:
          <input type="tel" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} required />
        </label>
      )}
      <button type="button" onClick={handleToggle}>
        {isEmail ? 'Use Phone Instead' : 'Use Email Instead'}
      </button>
      <label>
        Date of Birth:
        <input type="number" placeholder="Month" value={month} onChange={e => setMonth(e.target.value)} min="1" max="12" required />
        <input type="number" placeholder="Day" value={day} onChange={e => setDay(e.target.value)} min="1" max="31" required />
        <input type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} min="1900" max="2024" required />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUpForm;
