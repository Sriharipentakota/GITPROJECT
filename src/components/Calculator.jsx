import React, { useState } from 'react';
import './Calculator.module.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="calculator-buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="calculator-result">{result}</div>
    </div>
  );
}

export default Calculator;
