// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check admin login flag
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  // Hide upload button on login page
  const isLoginPage = location.pathname === '/login';

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
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleUploadClick = () => {
    document.getElementById('uploadInputNavbar').click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('certificateFile', file);
    // For demonstration, using hardcoded studentName and internshipTitle
    formData.append('studentName', 'Demo Student');
    formData.append('internshipTitle', 'Demo Internship');

    try {
      const response = await fetch('/api/certificates', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Certificate uploaded successfully!');
      } else {
        alert('Failed to upload certificate.');
      }
    } catch (error) {
      console.error('Error uploading certificate:', error);
      alert('Failed to upload certificate.');
    }
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
          {isAdmin && !isLoginPage && (
            <li style={liStyle}>
              <Link to="/upload-certificate" style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }}>
                Upload Certificate
              </Link>
            </li>
          )}
          {!isAuthenticated ? (
            <>
              <li style={liStyle}>
                <Link style={{ ...linkStyle, ...(isMobile && mobileLinkStyle) }} to="/login">Login</Link>
              </li>
              <li style={liStyle}>
                <Link style={{ ...signupButtonStyle, ...(isMobile && mobileLinkStyle) }} to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li style={liStyle}>
                <button 
                  onClick={handleLogout} 
                  style={{ ...logoutButtonStyle, ...(isMobile && mobileLinkStyle) }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '14px',
  cursor: 'pointer',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#2563eb',
  color: 'white',
  fontWeight: '600',
  transition: 'background-color 0.3s ease',
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
  height: '80px',
  width: 'auto',
  objectFit: 'contain',
  transform: 'scale(2.0)',
  transformOrigin: 'center center',
  transition: 'transform 0.3s ease',
  '@media (max-width: 768px)': {
    transform: 'scale(1.1)',
  },
  '@media (max-width: 480px)': {
    transform: 'scale(1.0)',
  },
  paddingTop :'6px',
  
};

// Navbar Styles
const navStyle = { 
  backgroundColor: colors.background,
  padding: `${spacing.small} 0`,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  height: '50px', // Fixed navbar height
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
  height: '100%',
  '@media (max-width: 768px)': {
    padding: `0 ${spacing.small}`
  }
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  overflow: 'visible',
  // padding:'5px',
  '@media (max-width: 768px)': {
    flex: 1,
    justifyContent: 'flex-start'
  }
};

const logoLinkStyle = {
  color: colors.primary,
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.8
  },
  paddingLeft: '50px',
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
  position: 'fixed',
  top: '80px',
  left: 0,
  right: 0,
  backgroundColor: colors.background,
  flexDirection: 'column',
  gap: spacing.small,
  padding: spacing.medium,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 999
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
  fontSize: '1.8rem',
  color: colors.text,
  padding: spacing.small,
  marginLeft: 'auto',
  zIndex: 1001
};

const profileStyle = {
  color: '#2563eb',
  fontWeight: '600',
  fontSize: '14px',
  padding: '8px 16px',
  borderRadius: '6px',
  border: '1px solid #2563eb',
  cursor: 'default',
  userSelect: 'none',
  marginRight: '10px',
};

export default Navbar;
