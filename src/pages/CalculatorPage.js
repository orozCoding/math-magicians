import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <div className="calculatorPageContainer">
    <div className="leftColumn">
      <p className="calculatorPageText">Let&apos;s do some math</p>
    </div>
    <div className="rightColumn">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
