import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    const updatedCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedCalculatorData);
  };
  const buttons = [
    { text: 'AC', className: 'gray', click: () => handleClick('AC') },
    { text: '+/-', className: 'gray', click: () => handleClick('+/-') },
    { text: '%', className: 'gray', click: () => handleClick('%') },
    { text: '/', className: 'orange', click: () => handleClick('/') },
    { text: 7, className: 'gray', click: () => handleClick('7') },
    { text: 8, className: 'gray', click: () => handleClick('8') },
    { text: 9, className: 'gray', click: () => handleClick('9') },
    { text: 'x', className: 'orange', click: () => handleClick('x') },
    { text: 4, className: 'gray', click: () => handleClick('4') },
    { text: 5, className: 'gray', click: () => handleClick('5') },
    { text: 6, className: 'gray', click: () => handleClick('6') },
    { text: '-', className: 'orange', click: () => handleClick('-') },
    { text: 1, className: 'gray', click: () => handleClick('1') },
    { text: 2, className: 'gray', click: () => handleClick('2') },
    { text: 3, className: 'gray', click: () => handleClick('3') },
    { text: '+', className: 'orange', click: () => handleClick('+') },
    { text: 0, className: 'gray w-2', click: () => handleClick('0') },
    { text: '.', className: 'gray', click: () => handleClick('.') },
    { text: '=', className: 'orange', click: () => handleClick('=') },
  ];
  return (
    <div>
      <div className="input-section">
        <input type="text" value={calculatorData.next || calculatorData.total || '0'} id="txtInput" />
      </div>
      <div className="button-section">
        {buttons.map((b) => (
          <CalculatorButton
            key={b.text}
            text={b.text}
            className={b.className}
            click={b.click}
          />
        ))}
      </div>
    </div>
  );
};
export default Calculator;
