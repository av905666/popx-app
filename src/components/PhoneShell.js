import React from 'react';
import './PhoneShell.css';

const PhoneShell = ({ children }) => {
  return (
    <div className="page-bg">
      <div className="phone-shell">
        {children}
      </div>
    </div>
  );
};

export default PhoneShell;
