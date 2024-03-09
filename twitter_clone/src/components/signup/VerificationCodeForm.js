import React, { useState } from 'react';

const VerificationCodeForm = ({ onSubmit }) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(verificationCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Verification Code:
        <input type="text" value={verificationCode} onChange={e => setVerificationCode(e.target.value)} required />
      </label>
      <input type="submit" value="Verify" />
    </form>
  );
};

export default VerificationCodeForm;
