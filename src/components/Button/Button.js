import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children, handleClick } = props;
  const isOperator = (val) => {
    return !isNaN(val) || val === '.' || val === '=';
  };
  return (
    <div
      className={`button ${isOperator(children) ? null : 'operator'}`}
      onClick={() => handleClick(children)}>
      {props.children}
    </div>
  );
};

export default Button;
