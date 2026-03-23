import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.1-10.5H4.9C3.86 5 3 5.86 3 6.9v10.2C3 18.14 3.86 19 4.9 19h14.2c1.04 0 1.9-.86 1.9-1.9V6.9C21 5.86 20.14 5 19.1 5z" />
  </svg>
);

const Profile = () => {
  const location  = useLocation();
  const fileRef   = useRef(null);
  const [avatar, setAvatar] = React.useState(null);

  const name  = location.state?.name  || 'Marry Doe';
  const email = location.state?.email || 'Marry@Gmail.Com';

  const initial = name.charAt(0).toUpperCase();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  return (
    <div className="profile screen-enter">

      {/* Header */}
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      {/* User card */}
      <div className="profile-card">
        <div className="avatar-wrap">
          {avatar ? (
            <img src={avatar} alt="avatar" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">{initial}</div>
          )}
          <button
            className="cam-btn"
            onClick={() => fileRef.current.click()}
            aria-label="Change profile photo"
          >
            <CameraIcon />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
        </div>

        <div className="profile-info">
          <h3>{name}</h3>
          <span>{email}</span>
        </div>
      </div>

      {/* Bio */}
      <div className="profile-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Elitr, Sed Diam Nonumy Eirmod
        Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      {/* Spacer content area */}
      <div className="profile-spacer" />
    </div>
  );
};

export default Profile;
