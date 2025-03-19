// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSpinner, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <header style={heroSection}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Welcome Back to Credora</h1>
          <p style={heroSubtitle}>Unlock your professional potential</p>
        </div>
      </header>

      {/* Login Form */}
      <section style={sectionStyle}>
        <div style={formContainer}>
          <form onSubmit={handleLogin} style={loginForm}>
            <div style={inputGroup}>
              <FaEnvelope style={inputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <FaLock style={inputIcon} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <button 
              type="submit" 
              style={primaryButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner style={spinnerStyle} />
              ) : (
                <>
                  <FaSignInAlt style={buttonIcon} />
                  Login
                </>
              )}
            </button>

            {message && (
              <p style={message.includes('failed') ? errorStyle : successStyle}>
                {message}
              </p>
            )}

            <p style={signupText}>
              Don't have an account?{' '}
              <a 
                href="/signup" 
                style={signupLink}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signup');
                }}
              >
                Create account
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
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
  lightBackground: '#e2e8f0',
  error: '#dc2626',
  success: '#0d9488'
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

// Page Styles
const pageStyle = {
  fontFamily: fonts.primary,
  color: colors.text,
  lineHeight: 1.6
};

const heroSection = {
  backgroundColor: colors.primary,
  padding: `${spacing.xlarge} ${spacing.medium}`,
  color: 'white',
  borderRadius: '0 0 30px 30px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const heroContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center'
};

const heroTitle = {
  fontSize: '2.5rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.medium
};

const heroSubtitle = {
  fontSize: '1.2rem',
  marginBottom: spacing.xlarge,
  opacity: 0.9
};

const sectionStyle = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  maxWidth: '600px',
  margin: '0 auto'
};

// Form Styles
const formContainer = {
  backgroundColor: 'white',
  padding: spacing.xlarge,
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const loginForm = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.large
};

const inputGroup = {
  position: 'relative'
};

const inputIcon = {
  position: 'absolute',
  left: spacing.medium,
  top: '50%',
  transform: 'translateY(-50%)',
  color: colors.lightText,
  fontSize: '1.2rem'
};

const inputStyle = {
  width: '100%',
  padding: `${spacing.medium} ${spacing.medium} ${spacing.medium} ${spacing.xlarge}`,
  border: `1px solid ${colors.lightBackground}`,
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'border-color 0.2s'
};

const primaryButton = {
  padding: spacing.medium,
  backgroundColor: colors.secondary,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.small,
  fontSize: '1rem',
  fontWeight: '600',
  transition: 'all 0.2s'
};

const buttonIcon = {
  fontSize: '1.2rem'
};

const spinnerStyle = {
  animation: 'spin 1s linear infinite',
  fontSize: '1.2rem'
};

const errorStyle = {
  color: colors.error,
  textAlign: 'center',
  marginTop: spacing.small
};

const successStyle = {
  color: colors.success,
  textAlign: 'center',
  marginTop: spacing.small
};

const signupText = {
  textAlign: 'center',
  color: colors.lightText,
  marginTop: spacing.medium
};

const signupLink = {
  color: colors.primary,
  fontWeight: '600',
  textDecoration: 'none'
};

// Add to your CSS file
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

export default Login;