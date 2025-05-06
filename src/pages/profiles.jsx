import React from 'react';
import './profiles.css';

const Profile = () => {
  const user = {
    name: 'Yash Dhankhar',
    email: 'yash@example.com',
    location: 'Delhi, India',
    joined: 'January 2024'
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
