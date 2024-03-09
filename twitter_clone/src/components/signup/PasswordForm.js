import React, { useState } from 'react';

const PasswordForm = ({ onSubmit }) => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 8) {
            setErrorMessage('Password must be 8 characters or more');
        } else {
            setErrorMessage('');
            onSubmit(password);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length >= 8) {
            setErrorMessage('');
        }
    };

    return (
        <div>
            <h2>You'll need a password</h2>
            <p>Make sure it's 8 characters or more</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </label>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input type="submit" value="Submit" />
                <p>
                    By signing up, you agree to the <a href='https://twitter.com/en/tos'>Terms of Service</a> and <a href='https://twitter.com/en/privacy'>Privacy Policy</a>,
                    including <a href='https://twitter.com/en/privacy'>Cookie Use</a>. Twitter may use your contact information, including your email address
                    and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and
                    personalizing our services, including ads. <a href='https://twitter.com/en/privacy'>Learn more</a>.
                    Others will be able to find you by email or phone number, when provided, unless you choose otherwise <a href="#">here</a>.
                </p>
            </form>
        </div>
    );
};

export default PasswordForm;
