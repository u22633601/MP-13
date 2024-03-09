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
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Create your account</h2>
                <label>
                    <span>Name:</span>
                    <input autocapitalize="sentences" autocomplete="name" autocorrect="on" maxlength="50" name="name" spellcheck="true" type="text" dir="auto" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                {isEmail ? (
                    <label>
                        <span>Email:</span>
                        <input autocapitalize="sentences" autocomplete="email" autocorrect="on" name="email" spellcheck="true" type="email" dir="auto" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} required />
                    </label>
                ) : (
                    <label>
                        <span>Phone:</span>
                        <input dir="auto" autocapitalize="sentences" autocomplete="tel" autocorrect="on" name="phone_number" spellcheck="true" type="tel" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} required />
                    </label>
                )}
                <button type="button" onClick={handleToggle}>
                    {isEmail ? 'Use Phone Instead' : 'Use Email Instead'}
                </button>
                <label>
                    Date of Birth:
                    <select value={month} onChange={e => setMonth(e.target.value)} required>
                        <option value="" disabled>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select value={day} onChange={e => setDay(e.target.value)} required>
                        <option value="" disabled>Day</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                    <select value={year} onChange={e => setYear(e.target.value)} required>
                        <option value="" disabled>Year</option>
                        {Array.from({ length: 125 }, (_, i) => 1900 + i).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </label>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUpForm;
