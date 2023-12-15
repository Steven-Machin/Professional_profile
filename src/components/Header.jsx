// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/portfolio" className="header-link">Portfolio</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/resume" className="header-link">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
