import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header id="header" className="d-flex">
    <div className="logo-container d-flex">
      <p className="logo">Math Magicians</p>
    </div>
    <div>
      <Navbar />
    </div>
  </header>
);

export default Header;
