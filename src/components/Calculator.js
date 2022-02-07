import React, { Component } from 'react';
// import operate from '../logic/operate';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if (value.total != null) {
      this.setState({ total: value.total });
    }

    this.setState({ next: value.next });

    if (value.operation != null) {
      this.setState({ operation: value.operation });
    }
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div id="calc-container" className="d-flex col">
        <div id="calc-results">
          { total }
          { operation }
          { next }
        </div>
        <div id="calc-line-1" className="calc-row d-flex">
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, 'AC')); }} id="calc-btn-ac" className="btn-grey">AC</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '+/-')); }} id="calc-btn-plusminus" className="btn-grey">+/-</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '%')); }} id="calc-btn-percent" className="btn-grey">%</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '÷')); }} id="calc-btn-divide" className="btn-orange">÷</button>
        </div>
        <div id="calc-line-2" className="calc-row d-flex">
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '7')); }} id="calc-btn-7" className="btn-grey">7</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '8')); }} id="calc-btn-8" className="btn-grey">8</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '9')); }} id="calc-btn-9" className="btn-grey">9</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, 'x')); }} id="calc-btn-times" className="btn-orange">x</button>
        </div>
        <div id="calc-line-3" className="calc-row d-flex">
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '4')); }} id="calc-btn-4" className="btn-grey">4</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '5')); }} id="calc-btn-5" className="btn-grey">5</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '6')); }} id="calc-btn-6" className="btn-grey">6</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '-')); }} id="calc-btn-minus" className="btn-orange">-</button>
        </div>
        <div id="calc-line-4" className="calc-row d-flex">
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '1')); }} id="calc-btn-1" className="btn-grey">1</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '2')); }} id="calc-btn-2" className="btn-grey">2</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '3')); }} id="calc-btn-3" className="btn-grey">3</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '+')); }} id="calc-btn-plus" className="btn-orange">+</button>
        </div>
        <div id="calc-line-5" className="calc-row d-flex">
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '0')); }} id="calc-btn-0" className="btn-grey">0</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '.')); }} id="calc-btn-dot" className="btn-grey">.</button>
          <button type="button" onClick={() => { this.handleClick(calculate(this.state, '=')); }} id="calc-btn-equal" className="btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
