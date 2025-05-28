// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSpinner, FaSignInAlt } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: #000000;
    min-height: 100vh;
  }
`;

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
    <>
      <GlobalStyle />
      <div style={{
        background: colors.background,
        minHeight: '100vh',
        color: colors.text,
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <header style={{
          background: colors.gradient1,
          padding: `${spacing.xlarge} ${spacing.medium}`,
          borderRadius: '0 0 30px 30px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: spacing.medium }}>
            Start Your Journey with Credora
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', opacity: 0.9 }}>
            Create your account to access exclusive opportunities
          </p>
        </header>

        <SignupSection>
          <FormWrapper>
            <StyledForm onSubmit={handleSignup}>
              <InputContainer>
                <IconWrapper>
                  <FaUser />
                </IconWrapper>
                <StyledInput
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputContainer>

              <InputContainer>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <StyledInput
                  type="email"
                  placeholder="Email Address"
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
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputContainer>

              <StyledButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <FaSpinner style={{
                    animation: 'spin 1s linear infinite'
                  }} />
                ) : (
                  <>
                    <FaSignInAlt size={18} />
                    Create Account
                  </>
                )}
              </StyledButton>

              {message && (
                <p style={{
                  color: message.includes('failed') ? colors.error : colors.success,
                  textAlign: 'center',
                  marginTop: spacing.small
                }}>
                  {message}
                </p>
              )}

              <p style={{
                textAlign: 'center',
                color: colors.lightText,
                marginTop: spacing.medium
              }}>
                Already have an account?{' '}
                <a 
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/login');
                  }}
                  style={{
                    color: colors.secondary,
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                >
                  Login here
                </a>
              </p>
            </StyledForm>
          </FormWrapper>
        </SignupSection>
      </div>
    </>
  );
};

// Update the colors constant
const colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  background: '#000000', // Changed from #0f172a to pure black
  dark: '#111111',
  text: '#e2e8f0',
  lightText: '#94a3b8',
  lightBackground: '#1e293b',
  error: '#ef4444',
  success: '#10b981',
  glassBg: 'rgba(255,255,255,0.08)',
  glassBlur: 'blur(20px)',
  gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  inputBorder: 'rgba(255,255,255,0.1)',
  inputFocus: 'rgba(99,102,241,0.5)'
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

const SignupSection = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${spacing.large} ${spacing.medium};
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: ${spacing.medium} ${spacing.small};
    margin-top: 20px;
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

const IconWrapper = styled.div`
  position: absolute;
  left: ${spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.lightText};
  font-size: 1.2rem;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    left: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    left: 10px;
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
    padding: 12px 12px 12px 40px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

const StyledButton = styled.button`
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
    padding: 14px;
    font-size: 0.95rem;
    border-radius: 8px;
    
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: none;
    }
  }
`;

// Reuse design system from previous pages
export default Signup;