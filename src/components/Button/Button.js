import React from 'react';
import './Button.css';

const Button = ({ handleClick, content, type }) => {
  return (
    <div className={`button ${type}`} onClick={handleClick(content)}>
      {content}
    </div>
  );
};

export default Button;
