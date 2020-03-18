import React from 'react';
import './DialerKey.css';

export default ({ label, value, onClick }) => (
  <button
    className="DialerKey"
    onClick={() => onClick(value)}
  >
    {label}
  </button>
);
