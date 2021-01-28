import React, { useState } from 'react';

import './App.css';
import Button from './components/Button/Button';
import ClearButton from './components/ClearButton/ClearButton';
import Input from './components/Input/Input';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [currNumber, setCurrNumber] = useState('');
  const [operator, setOperator] = useState('');

  const addToInput = (val) => {
    setInputVal(inputVal + val);
  };
  const addZeroToInput = (val) => {
    if (inputVal !== '') {
      setInputVal(inputVal + val);
    }
  };
  const addDecimal = (val) => {
    if (!inputVal.includes('.')) {
      setInputVal(inputVal + val);
    }
  };
  const clearInput = () => {
    setInputVal('');
    setOperator('');
    setCurrNumber('');
    setPrevNumber('');
  };

  const addition = () => {
    setPrevNumber(inputVal);
    setInputVal('');
    setOperator('plus');
  };

  const evaluate = () => {
    setCurrNumber(inputVal);
    if (operator === 'plus') {
      setInputVal(currNumber + prevNumber);
    }
  };

  return (
    <div className='App'>
      <div className='calc-wrap'>
        <div className='row'>
          <Input>{inputVal}</Input>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addition}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addDecimal}>.</Button>
          <Button handleClick={addZeroToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <ClearButton clear={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
