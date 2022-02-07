import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calc-container" className="d-flex col">
        <div id="calc-results">0</div>
        <div id="calc-line-1" className="calc-row d-flex">
          <button type="button" id="calc-btn-ac" className="btn-grey">AC</button>
          <button type="button" id="calc-btn-plusminus" className="btn-grey">+/-</button>
          <button type="button" id="calc-btn-percent" className="btn-grey">%</button>
          <button type="button" id="calc-btn-divide" className="btn-orange">÷</button>
        </div>
        <div id="calc-line-2" className="calc-row d-flex">
          <button type="button" id="calc-btn-7" className="btn-grey">7</button>
          <button type="button" id="calc-btn-8" className="btn-grey">8</button>
          <button type="button" id="calc-btn-9" className="btn-grey">9</button>
          <button type="button" id="calc-btn-times" className="btn-orange">x</button>
        </div>
        <div id="calc-line-3" className="calc-row d-flex">
          <button type="button" id="calc-btn-4" className="btn-grey">4</button>
          <button type="button" id="calc-btn-5" className="btn-grey">5</button>
          <button type="button" id="calc-btn-6" className="btn-grey">6</button>
          <button type="button" id="calc-btn-minus" className="btn-orange">-</button>
        </div>
        <div id="calc-line-4" className="calc-row d-flex">
          <button type="button" id="calc-btn-1" className="btn-grey">1</button>
          <button type="button" id="calc-btn-2" className="btn-grey">2</button>
          <button type="button" id="calc-btn-3" className="btn-grey">3</button>
          <button type="button" id="calc-btn-plus" className="btn-orange">+</button>
        </div>
        <div id="calc-line-5" className="calc-row d-flex">
          <button type="button" id="calc-btn-0" className="btn-grey">0</button>
          <button type="button" id="calc-btn-dot" className="btn-grey">.</button>
          <button type="button" id="calc-btn-equal" className="btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
