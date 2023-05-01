import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Display() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const click = (btnName) => {
    const newState = calculate(state, btnName);
    setState(newState);
  };

  return (
    <div className="calculator-grid">
      <div className="result">{state.next || state.total || '0'}</div>
      <button type="button" onClick={() => click('AC')}>AC</button>
      <button type="button" onClick={() => click('+/-')}>+/-</button>
      <button type="button" onClick={() => click('%')}>%</button>
      <button type="button" onClick={() => click('÷')} className="orange">/</button>
      <button type="button" onClick={() => click('7')}>7</button>
      <button type="button" onClick={() => click('8')}>8</button>
      <button type="button" onClick={() => click('9')}>9</button>
      <button type="button" onClick={() => click('x')} className="orange">x</button>
      <button type="button" onClick={() => click('4')}>4</button>
      <button type="button" onClick={() => click('5')}>5</button>
      <button type="button" onClick={() => click('6')}>6</button>
      <button type="button" onClick={() => click('-')} className="orange">-</button>
      <button type="button" onClick={() => click('1')}>1</button>
      <button type="button" onClick={() => click('2')}>2</button>
      <button type="button" onClick={() => click('3')}>3</button>
      <button type="button" onClick={() => click('+')} className="orange">+</button>
      <button type="button" onClick={() => click('0')} className="span">0</button>
      <button type="button" onClick={() => click('.')}>.</button>
      <button type="button" onClick={() => click('=')} className="orange">=</button>
    </div>
  );
}

export default Display;
