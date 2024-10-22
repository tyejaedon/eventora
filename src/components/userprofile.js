// UserProfile.js
import React from 'react';


const UserProfile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profileImage} alt={`${user.name}'s profile`} className="profile-image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="profile-stats">
        <h3>Profile Statistics</h3>
        <ul>
          <li>
            <strong>Favorite Category:</strong> {user.favoriteCategory}
          </li>
          <li>
            <strong>Events Attended:</strong> {user.eventsAttended}
          </li>
          <li>
            <strong>Last Event Date:</strong> {user.lastEventDate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
