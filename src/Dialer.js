import React, { useState } from 'react';
import DialerKey from './DialerKey';
import './Dialer.css';

const dialerKeys = [1,2,3,4,5,6,7,8,9,0];

export default function Dialer({ onSubmit }) {
  const [value, setValue] = useState(null);

  return (
    <div className="Dialer">
      <div className="Display">
        = {value === null ? '...?' : value}
      </div>

      <div className="DialerPad">
        {dialerKeys.map(num => (
          <DialerKey
            key={num}
            label={num}
            value={num}
            onClick={() => setValue(`${value === null ? '' : value}${num}`)}
          />
        ))}
      </div>

      <div className="DialerActions">
        <button className="Clear" onClick={() => setValue(null)}>✖</button>
        <button className="Submit" onClick={() => {setValue(null); onSubmit(value)}}>✔</button>
      </div>
    </div>
  );
};
