import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing screen-enter">
      {/* Top decorative area */}
      <div className="landing-bg" />

      {/* Bottom content */}
      <div className="landing-content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
