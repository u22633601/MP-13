import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.co';
const supabaseKey = 'apikey';
const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [userData, setUserData] = useState(null); // State to store user data
  const [inputType, setInputType] = useState('email'); // State to track input type (email or phone)
  const [verificationCode, setVerificationCode] = useState('');
  const [signUpComplete, setSignUpComplete] = useState(false); // State to track if sign-up process is complete

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { user, error } = await supabase.auth.signUp({
      [inputType]: inputType === 'email' ? email : phone, // Use either email or phone based on inputType
      data: {
        name,
        birth_date: `${year}-${month}-${day}`,
      },
    });

    if (error) {
      console.error('Error signing up:', error.message);
      setSignUpComplete(true); // Set sign-up process as complete to prevent verification code prompt
    } else {
      console.log('User signed up:', user);
      console.log(user);
      setUserData(user); // Update user data state
      setSignUpComplete(true); // Set sign-up process as complete
    }
  };

  const handleVerificationSubmit = async (event) => {
    event.preventDefault();

    // Implement verification code verification logic here

    // For demonstration purposes, let's assume the verification is successful
    console.log('Verification code:', verificationCode);
  };

  const handleInputChange = (value) => {
    if (inputType === 'email') {
      setEmail(value);
    } else {
      setPhone(value);
    }
  };

  const toggleInputType = () => {
    setInputType(inputType === 'email' ? 'phone' : 'email');
  };

  if (signUpComplete) {
    return (
      <div>
        <form onSubmit={handleVerificationSubmit}>
          <label>
            Verification Code:
            <input type="text" value={verificationCode} onChange={e => setVerificationCode(e.target.value)} required />
          </label>
          <input type="submit" value="Verify" />
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        {inputType === 'email' && (
          <label>
            Email:
            <input type="email" value={email} onChange={e => handleInputChange(e.target.value)} required />
          </label>
        )}
        {inputType === 'phone' && (
          <label>
            Phone:
            <input type="tel" value={phone} onChange={e => handleInputChange(e.target.value)} required />
          </label>
        )}
        <label>
          Date of Birth:
          <input type="number" placeholder="Month" value={month} onChange={e => setMonth(e.target.value)} min="1" max="12" required />
          <input type="number" placeholder="Day" value={day} onChange={e => setDay(e.target.value)} min="1" max="31" required />
          <input type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} min="1900" max="2024" required />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      {userData && ( // Conditionally render user data if available
        <div>
          <h2>User Data:</h2>
          <p>Name: {userData.user_metadata.name}</p>
          {inputType === 'email' && <p>Email: {userData.email}</p>}
          {inputType === 'phone' && <p>Phone: {userData.phone}</p>}
          <p>UID: {userData.id}</p>
          {/* Add more fields as needed */}
        </div>
      )}
      {!signUpComplete && ( // Render button to toggle input type if sign-up process is not complete
        <button onClick={toggleInputType}>Use {inputType === 'email' ? 'Phone' : 'Email'}</button>
      )}
    </div>
  );
};

export default SignUp;
