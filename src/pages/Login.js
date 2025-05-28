// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSpinner, FaSignInAlt } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Hardcoded admin credentials
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');
      setMessage('Admin login successful! Redirecting...');
      setTimeout(() => {
        setIsLoading(false);
        navigate('/');
      }, 1500);
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, { email, password });
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
    <>
      <GlobalStyle />
      <div style={{
        ...pageStyle,
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: colors.background
      }}>
        {/* Hero Section */}
        <header style={heroSection}>
          <div style={heroContent}>
            <h1 style={heroTitle}>Welcome Back to Credora</h1>
            <p style={heroSubtitle}>Unlock your professional potential</p>
          </div>
        </header>

        {/* Login Form */}
        <LoginSection>
          <FormWrapper>
            <StyledForm onSubmit={handleLogin}>
              <InputContainer>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <StyledInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputContainer>

              <InputContainer>
                <IconWrapper>
                  <FaLock />
                </IconWrapper>
                <StyledInput
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputContainer>

              <StyledButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <FaSpinner style={spinnerStyle} />
                ) : (
                  <>
                    <FaSignInAlt size={18} />
                    Login
                  </>
                )}
              </StyledButton>

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
            </StyledForm>
          </FormWrapper>
        </LoginSection>
      </div>
    </>
  );
};

// Global Styles
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #000000;
    min-height: 100vh;
    width: 100%;
  }

  #root {
    background-color: #000000;
    min-height: 100vh;
    width: 100%;
  }
`;

// Design System Constants
const colors = {
  primary: '#6366f1', // Indigo
  secondary: '#8b5cf6', // Purple
  accent: '#f59e0b',   // Amber
  background: '#000000', // Changed from #0f172a to pure black
  dark: '#111111', // Slightly lighter than black for input fields
  text: '#e2e8f0',     // Light gray
  lightText: '#94a3b8', // Slate
  lightBackground: '#1e293b', // Darker slate
  error: '#ef4444',     // Red
  success: '#10b981',   // Green
  glassBg: 'rgba(255,255,255,0.08)',
  glassBlur: 'blur(20px)',
  gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  inputBorder: 'rgba(255,255,255,0.1)', // Subtle border for inputs
  inputFocus: 'rgba(99,102,241,0.5)' // Indigo with opacity for focus
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
  lineHeight: 1.6,
  backgroundColor: colors.background,
  minHeight: '100vh'
};

const heroSection = {
  background: colors.gradient1,
  padding: `${spacing.xlarge} ${spacing.medium}`,
  color: 'white',
  borderRadius: '0 0 30px 30px',
  boxShadow: '0 4px 32px rgba(99,102,241,0.2)'
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

const LoginSection = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${spacing.large} ${spacing.medium};
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: ${spacing.medium} ${spacing.small};
    margin-top: 10px;
  }
`;

const FormWrapper = styled.div`
  background: ${colors.dark};
  backdrop-filter: ${colors.glassBlur};
  padding: ${spacing.xlarge};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  border: 1px solid ${colors.inputBorder};
  ${'' /* width: 100%; */}
  max-width: 440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${spacing.large};
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: ${spacing.medium};
    border-radius: 8px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};

  @media (max-width: 768px) {
    gap: ${spacing.small};
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${spacing.medium};

  @media (max-width: 768px) {
    margin-bottom: ${spacing.small};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${spacing.medium} ${spacing.medium} ${spacing.medium} ${spacing.xlarge};
  border: 1px solid ${colors.inputBorder};
  border-radius: 12px;
  font-size: 1rem;
  background-color: ${colors.dark};
  color: ${colors.text};
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: ${colors.inputFocus};
    outline: none;
    box-shadow: 0 0 0 2px ${colors.primary}25;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 12px 12px 40px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: ${spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.lightText};
  font-size: 1.2rem;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    left: 12px;
  }
`;

// Form Styles
const primaryButton = {
  padding: spacing.medium,
  background: colors.gradient1,
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing.small,
  fontSize: '1rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(99,102,241,0.25)'
  }
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
  color: colors.secondary,
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: colors.primary
  }
};



// Add this styled component after your other styled components
const  StyledButton = styled.button`
  width: 100%;
  padding: ${spacing.medium};
  background: ${colors.gradient1};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.small};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(99,102,241,0.25);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
    font-size: 0.95rem;
    border-radius: 8px;
    
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

// Then replace your button element with:
// <StyledButton type="submit" disabled={isLoading}>
//   {isLoading ? (
//     <FaSpinner style={spinnerStyle} />
//   ) : (
//     <>
//       <FaSignInAlt size={18} />
//       Login
//     </>
//   )}
// </StyledButton>

export default Login;