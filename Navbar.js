// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Perfume Shop</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
      </div>
    </nav>
  );
}

export default Navbar;
