// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav style={navStyle}>
      <div style={navContainer}>
        <div style={logoStyle}>
          <Link to="/" style={logoLinkStyle}>Credora</Link>
        </div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link style={linkStyle} to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/about">About</Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/internships">Internships</Link>
        </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/verify-certificate">Verify</Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li style={liStyle}>
                <Link style={linkStyle} to="/login">Login</Link>
              </li>
              <li style={liStyle}>
                <Link style={signupButtonStyle} to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <li style={liStyle}>
              <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

// Design System Constants
const colors = {
  primary: '#2563eb',
  secondary: '#0d9488',
  accent: '#f59e0b',
  background: '#f8fafc',
  text: '#1e293b',
  lightText: '#64748b',
  lightBackground: '#e2e8f0'
};

const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '48px'
};

const fonts = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  heading: "'Poppins', sans-serif"
};

// Navbar Styles
const navStyle = { 
  backgroundColor: colors.background,
  padding: `${spacing.small} 0`,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navContainer = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${spacing.medium}`
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  fontFamily: fonts.heading
};

const logoLinkStyle = {
  color: colors.primary,
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8
  }
};

const ulStyle = { 
  listStyle: 'none',
  display: 'flex',
  gap: spacing.large,
  alignItems: 'center',
  margin: 0,
  padding: 0
};

const liStyle = {
  display: 'flex',
  alignItems: 'center'
};

const linkStyle = {
  color: colors.text,
  textDecoration: 'none',
  fontFamily: fonts.primary,
  fontWeight: '500',
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: '8px',
  transition: 'all 0.2s',
  ':hover': {
    color: colors.primary,
    backgroundColor: colors.lightBackground
  }
};

const signupButtonStyle = {
  ...linkStyle,
  backgroundColor: colors.secondary,
  color: 'white',
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: '8px',
  ':hover': {
    backgroundColor: '#0b7a6d',
    transform: 'translateY(-2px)'
  }
};

const logoutButtonStyle = {
  ...signupButtonStyle,
  backgroundColor: colors.error || '#dc2626',
  border: 'none',
  cursor: 'pointer',
  fontFamily: fonts.primary,
  fontSize: '1rem',
  ':hover': {
    backgroundColor: '#b91c1c',
    transform: 'translateY(-2px)'
  }
};

export default Navbar;