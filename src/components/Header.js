// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Credora</h1>
      <nav>
        <Link style={linkStyle} to="/">Home</Link> |{' '}
        <Link style={linkStyle} to="/about">About Us</Link> |{' '}
        <Link style={linkStyle} to="/verify-certificate">Verify Certificate</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#f8f8f8',
  padding: '10px',
  textAlign: 'center'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333'
};

export default Header;
