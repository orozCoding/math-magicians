import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (value) => {
    if (value.total != null) {
      setTotal(value.total);
    }

    setNext(value.next);

    if (value.operation != null) {
      setOperation(value.operation);
    }
  };

  const obj = { total, operation, next };

  return (
    <div id="calc-container" className="d-flex col">
      <div id="calc-results">
        {total}
        {operation}
        {next}
      </div>
      <div id="calc-line-1" className="calc-row d-flex">
        <button type="button" onClick={() => { handleClick(calculate(obj, 'AC')); }} id="calc-btn-ac" className="btn-grey">AC</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '+/-')); }} id="calc-btn-plusminus" className="btn-grey">+/-</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '%')); }} id="calc-btn-percent" className="btn-grey">%</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '÷')); }} id="calc-btn-divide" className="btn-orange">÷</button>
      </div>
      <div id="calc-line-2" className="calc-row d-flex">
        <button type="button" onClick={() => { handleClick(calculate(obj, '7')); }} id="calc-btn-7" className="btn-grey">7</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '8')); }} id="calc-btn-8" className="btn-grey">8</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '9')); }} id="calc-btn-9" className="btn-grey">9</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, 'x')); }} id="calc-btn-times" className="btn-orange">x</button>
      </div>
      <div id="calc-line-3" className="calc-row d-flex">
        <button type="button" onClick={() => { handleClick(calculate(obj, '4')); }} id="calc-btn-4" className="btn-grey">4</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '5')); }} id="calc-btn-5" className="btn-grey">5</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '6')); }} id="calc-btn-6" className="btn-grey">6</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '-')); }} id="calc-btn-minus" className="btn-orange">-</button>
      </div>
      <div id="calc-line-4" className="calc-row d-flex">
        <button type="button" onClick={() => { handleClick(calculate(obj, '1')); }} id="calc-btn-1" className="btn-grey">1</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '2')); }} id="calc-btn-2" className="btn-grey">2</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '3')); }} id="calc-btn-3" className="btn-grey">3</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '+')); }} id="calc-btn-plus" className="btn-orange">+</button>
      </div>
      <div id="calc-line-5" className="calc-row d-flex">
        <button type="button" onClick={() => { handleClick(calculate(obj, '0')); }} id="calc-btn-0" className="btn-grey">0</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '.')); }} id="calc-btn-dot" className="btn-grey">.</button>
        <button type="button" onClick={() => { handleClick(calculate(obj, '=')); }} id="calc-btn-equal" className="btn-orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
