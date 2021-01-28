import React, { useState } from 'react';

import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [value, setValue] = useState('0');
  const [prevNum, setPrevNum] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);
    if (content === 'Clear') {
      setValue('0');
      setPrevNum(null);
      setOperator(null);
      return;
    }
    if (content === '+') {
      setPrevNum(parseFloat(value));
      setValue('0');
      setOperator('+');
      return;
    }
    if (content === '-') {
      setPrevNum(parseFloat(value));
      setValue('0');
      setOperator('-');
      return;
    }
    if (content === '*') {
      setPrevNum(parseFloat(value));
      setValue('0');
      setOperator('*');
      return;
    }
    if (content === '/') {
      setPrevNum(parseFloat(value));
      setValue('0');
      setOperator('/');
      return;
    }
    if (content === '=') {
      if (!operator) return;

      if (operator === '+') {
        setValue((prevNum + parseFloat(value)).toString());
      } else if (operator === '-') {
        setValue((prevNum - parseFloat(value)).toString());
      } else if (operator === '*') {
        setValue((prevNum * parseFloat(value)).toString());
      } else if (operator === '/') {
        setValue((prevNum / parseFloat(value)).toString());
      }
      setPrevNum(null);
      setOperator(null);
      return;
    }
    setValue(parseFloat(num + content).toString());
  };

  return (
    <div className='App'>
      <div className='calc-wrap'>
        <div className='row'>
          <Input>{value}</Input>
        </div>
        <div className='row'>
          <Button handleClick={handleButtonPress} content='7' />
          <Button handleClick={handleButtonPress} content='8' />
          <Button handleClick={handleButtonPress} content='9' />
          <Button handleClick={handleButtonPress} content='/' type='operator' />
        </div>
        <div className='row'>
          <Button handleClick={handleButtonPress} content='4' />
          <Button handleClick={handleButtonPress} content='5' />
          <Button handleClick={handleButtonPress} content='6' />
          <Button handleClick={handleButtonPress} content='*' type='operator' />
        </div>
        <div className='row'>
          <Button handleClick={handleButtonPress} content='1' />
          <Button handleClick={handleButtonPress} content='2' />
          <Button handleClick={handleButtonPress} content='3' />
          <Button handleClick={handleButtonPress} content='+' type='operator' />
        </div>
        <div className='row'>
          <Button handleClick={handleButtonPress} content='.' />
          <Button handleClick={handleButtonPress} content='0' />
          <Button handleClick={handleButtonPress} content='=' type='operator' />
          <Button handleClick={handleButtonPress} content='-' type='operator' />
        </div>
        <div className='row'>
          <Button
            handleClick={handleButtonPress}
            content='Clear'
            type='function'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
