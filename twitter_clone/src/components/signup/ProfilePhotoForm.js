import React, { useState } from 'react';

const ProfilePhotoForm = ({ onSubmit }) => {
  const [photo, setPhoto] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(photo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Profile Photo</h2>
      <input type="file" onChange={handlePhotoChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfilePhotoForm;
