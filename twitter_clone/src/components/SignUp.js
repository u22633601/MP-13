import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './signup/SignUpForm'; // Component for entering basic information
import VerificationCodeForm from './signup/VerificationCodeForm'; // Component for entering verification code
import PasswordForm from './signup/PasswordForm'; // Component for entering password
import UsernameForm from './signup/UsernameForm'; // Component for entering username

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // State to track the current step of the signup process
  const [signUpComplete, setSignUpComplete] = useState(false); // State to track if sign-up process is complete
  const [formData, setFormData] = useState({}); // State to store form data across steps
  
  const handleSignUpSubmit = (formData) => {
    // Handle sign-up submission logic
    console.log('Sign up form data:', formData);
    setFormData(formData);
    // Move to the next step (verification code form)
    setStep(2);
  };

  const handleVerificationCodeSubmit = (verificationCode) => {
    // Handle verification code submission logic
    console.log('Verification code:', verificationCode);
    // Move to the next step (password form)
    setStep(3);
  };

  const handlePasswordSubmit = (password) => {
    // Handle password submission logic
    console.log('Password:', password);
    // Move to the next step (username form)
    setStep(4);
  };

  const handleUsernameSubmit = (username) => {
    // Handle username submission logic
    console.log('Username:', username);
    // Set sign-up process as complete
    setSignUpComplete(true);
  };

  // If sign-up process is complete, navigate back to the sign-in page
  if (signUpComplete) {
    navigate('/');
    return null; // Render nothing, as navigation will take place
  }

  // Render the appropriate form based on the current step
  let formComponent;
  switch (step) {
    case 1:
      formComponent = <SignUpForm onSubmit={handleSignUpSubmit} />;
      break;
    case 2:
      formComponent = <VerificationCodeForm formData={formData} onSubmit={handleVerificationCodeSubmit} setStep={setStep} />;
      break;
    case 3:
      formComponent = <PasswordForm onSubmit={handlePasswordSubmit} />;
      break;
    case 4:
      formComponent = <UsernameForm onSubmit={handleUsernameSubmit} />;
      break;
    default:
      formComponent = <SignUpForm onSubmit={handleSignUpSubmit} />;
  }

  return (
    <div>
      <h1>Twitter Sign Up</h1>
      {formComponent}
    </div>
  );
};

export default SignUp;
