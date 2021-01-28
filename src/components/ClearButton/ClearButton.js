import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => {
  const { clear } = props;
  return (
    <div className='clear-btn' onClick={clear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
