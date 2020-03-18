import React from 'react';
import './Exercise.css';

export default ({counter, multiplier}) => (
  <div className="Exercise">
    <span className="counter">{counter}</span>
    <span className="times">{` ✖ `}</span>
    <span className="multiplier">{multiplier}</span>
  </div>
)
