import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="d-flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
