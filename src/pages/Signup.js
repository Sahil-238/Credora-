// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSpinner, FaSignInAlt } from 'react-icons/fa';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/users/signup`, { name, email, password });
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <header style={heroSection}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Start Your Journey with Credora</h1>
          <p style={heroSubtitle}>Create your account to access exclusive opportunities</p>
        </div>
      </header>

      {/* Signup Form */}
      <section style={sectionStyle}>
        <div style={formContainer}>
          <form onSubmit={handleSignup} style={loginForm}>
            <div style={inputGroup}>
              <FaUser style={inputIcon} />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <FaEnvelope style={inputIcon} />
              <input
                type="email"
                placeholder="Email Address"
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
                placeholder="Create Password"
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
                  Create Account
                </>
              )}
            </button>

            {message && (
              <p style={message.includes('failed') ? errorStyle : successStyle}>
                {message}
              </p>
            )}

            <p style={loginText}>
              Already have an account?{' '}
              <a 
                href="/login" 
                style={loginLink}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

// Reuse design system from previous pages
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

const loginText = {
  textAlign: 'center',
  color: colors.lightText,
  marginTop: spacing.medium
};

const loginLink = {
  color: colors.primary,
  fontWeight: '600',
  textDecoration: 'none'
};

export default Signup;