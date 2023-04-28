import React from 'react';
import Display from './display';
import '../styles/calculatorPage.css';

function Calculator() {
  return (
    <div className="calc-page">
      <h2 className="text">Let&apos;s do some Math!</h2>
      <Display />
    </div>

  );
}

export default Calculator;
