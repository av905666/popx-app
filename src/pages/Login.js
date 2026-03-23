import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors]     = useState({});

  const isActive = email.trim() !== '' && password.trim() !== '';

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleLogin = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate('/profile', { state: { email } });
  };

  return (
    <div className="login screen-enter">
      <h1>Signin to your<br />PopX account</h1>
      <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

      <div className="field-wrap">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className="field-wrap">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
        />
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      <button
        className={`btn-login ${isActive ? 'btn-login--active' : ''}`}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;