import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone:    '',
    email:    '',
    password: '',
    company:  '',
    isAgency: 'yes',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim())
      newErrors.fullName = 'Full name is required';

    if (!form.phone.trim())
      newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone))
      newErrors.phone = 'Enter a valid phone number';

    if (!form.email.trim())
      newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address';

    if (!form.password.trim())
      newErrors.password = 'Password is required';
    else if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate('/profile', {
      state: {
        name:  form.fullName,
        email: form.email,
      },
    });
  };

  return (
    <div className="signup screen-enter">
      <h1>Create your<br />PopX account</h1>

      <div className="field-wrap">
        <label>Full Name <span className="req">*</span></label>
        <input
          type="text"
          name="fullName"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
      </div>

      <div className="field-wrap">
        <label>Phone number <span className="req">*</span></label>
        <input
          type="tel"
          name="phone"
          placeholder="+91 00000 00000"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error-msg">{errors.phone}</span>}
      </div>

      <div className="field-wrap">
        <label>Email address <span className="req">*</span></label>
        <input
          type="email"
          name="email"
          placeholder="marry@email.com"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className="field-wrap">
        <label>Password <span className="req">*</span></label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      <div className="field-wrap">
        <label>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Your company"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="radio-group">
        <p className="radio-label">
          Are you an Agency? <span className="req">*</span>
        </p>
        <div className="radio-options">
          {['yes', 'no'].map((val) => (
            <label className="radio-option" key={val}>
              <input
                type="radio"
                name="isAgency"
                value={val}
                checked={form.isAgency === val}
                onChange={handleChange}
              />
              <span className="radio-custom">
                <span className="radio-inner" />
              </span>
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <button className="btn-primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default Signup;