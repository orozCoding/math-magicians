import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <Header />
    <div className="main d-flex col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
