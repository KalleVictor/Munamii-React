import React, { useState } from 'react';
import { Link } from 'react-router'; // Make sure it's react-router-dom
import logo from '../assets/munamii-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo-pic" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      <nav className="nav-desktop">
        <ul>
          <li><Link to="/home" className="btn">Home</Link></li>
          <li><Link to="/about" className="btn">About</Link></li>
          <li><Link to="/products" className="btn">Products</Link></li>
          <li><Link to="/contact" className="btn">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}