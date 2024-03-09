import React, { useState } from 'react';

const NotificationForm = ({ onSubmit }) => {
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: false,
    push: false,
  });

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(notificationPreferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Notification Preferences</h2>
      <label>
        <input
          type="checkbox"
          name="email"
          checked={notificationPreferences.email}
          onChange={handlePreferenceChange}
        />
        Receive Email Notifications
      </label>
      <label>
        <input
          type="checkbox"
          name="push"
          checked={notificationPreferences.push}
          onChange={handlePreferenceChange}
        />
        Receive Push Notifications
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NotificationForm;
