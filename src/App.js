import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<CalculatorPage />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
