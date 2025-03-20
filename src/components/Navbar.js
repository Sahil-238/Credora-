// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
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
  <Link to="/" style={logoLinkStyle}>
    <img 
      src="/images/logo.png" 
      alt="Credora Logo" 
      style={logoImageStyle}
    />
  </Link>
</div>  
        
        {isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={hamburgerButtonStyle}
          >
            ☰
          </button>
        )}

        <ul style={{
          ...ulStyle,
          ...(isMobile && mobileMenuStyle),
          display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex'
        }}>
          <li style={liStyle}>
            <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/about">About</Link>
          </li>
          <li style={liStyle}>
            <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/internships">Internships</Link>
          </li>
          <li style={liStyle}>
            <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/verify-certificate">Verify</Link>
          </li>
          {/* {!isAuthenticated ? (
            <>
              <li style={liStyle}>
                <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/login">Login</Link>
              </li>
              <li style={liStyle}>
                <Link style={{ ...signupButtonStyle, ...(isMobile && mobileLinkStyle) }} to="/signup">Sign Up</Link>
              </li>
            </> */}
          {/* ) : (
            <li style={liStyle}>
              <button 
                onClick={handleLogout} 
                style={{ ...logoutButtonStyle, ...(isMobile && mobileLinkStyle) }}
              >
                Logout
              </button>
            </li>
          )} */}
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
const logoImageStyle = {
  maxHeight: '100%', // Will respect the 80px container height
  width: 'auto',
  objectFit: 'contain',
  transform: 'scale(0.4)', // Increase visual size without changing container height
  transformOrigin: 'left center',
};

// Navbar Styles
const navStyle = { 
  backgroundColor: colors.background,
  padding: `${spacing.small} 0`,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  height: '80px', // Fixed navbar height
  display: 'flex',
  alignItems: 'center'
};
const navContainer = {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${spacing.medium}`,
  position: 'relative',
  height: '100%'
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  overflow: 'visible' // Allow the scaled logo to overflow if needed
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

const mobileMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: colors.background,
  flexDirection: 'column',
  gap: spacing.small,
  padding: spacing.medium,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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

const mobileLinkStyle = {
  width: '100%',
  padding: spacing.small,
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
  backgroundColor: '#dc2626',
  border: 'none',
  cursor: 'pointer',
  fontFamily: fonts.primary,
  fontSize: '1rem',
  ':hover': {
    backgroundColor: '#b91c1c',
    transform: 'translateY(-2px)'
  }
};

const hamburgerButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: colors.text,
  padding: spacing.small,
};

export default Navbar;