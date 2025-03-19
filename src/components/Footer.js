// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div style={footerSection}>
          <h3 style={sectionTitle}>Credora</h3>
          <p style={footerText}>Empowering students through industry-aligned internships and certifications</p>
          <div style={socialLinks}>
            <a href="https://facebook.com" aria-label="Facebook" style={socialLink}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" style={socialLink}>
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" style={socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" style={socialLink}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div style={footerSection}>
          <h3 style={sectionTitle}>Quick Links</h3>
          <ul style={linkList}>
            <li><a href="/about" style={footerLink}>About Us</a></li>
            <li><a href="/internships" style={footerLink}>Internships</a></li>
            <li><a href="/verify" style={footerLink}>Verify Certificate</a></li>
            <li><a href="/contact" style={footerLink}>Contact</a></li>
          </ul>
        </div>

        <div style={footerSection}>
          <h3 style={sectionTitle}>Contact Us</h3>
          <div style={contactInfo}>
            <div style={contactItem}>
              <FaEnvelope style={contactIcon} />
              <span>support@credora.com</span>
            </div>
            <p style={address}>Credora Headquarters<br/>
            123 Education Street<br/>
            Tech City, TC 45678</p>
          </div>
        </div>
      </div>

      <div style={copyright}>
        © {new Date().getFullYear()} Credora. All rights reserved.<br/>
        <div style={legalLinks}>
          <a href="/privacy" style={legalLink}>Privacy Policy</a> | 
          <a href="/terms" style={legalLink}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// Design System Integration
const colors = {
  primary: '#2563eb',
  secondary: '#0d9488',
  background: '#f8fafc',
  text: '#1e293b',
  lightText: '#64748b',
  border: '#e2e8f0'
};

const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '48px'
};

const fonts = {
  primary: "'Inter', sans-serif",
  heading: "'Poppins', sans-serif"
};

// Styles
const footerStyle = {
  backgroundColor: colors.background,
  padding: spacing.xlarge,
  marginTop: spacing.xlarge,
  borderTop: `1px solid ${colors.border}`
};

const footerContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: spacing.xlarge,
  paddingBottom: spacing.xlarge
};

const footerSection = {
  padding: spacing.medium
};

const sectionTitle = {
  fontFamily: fonts.heading,
  fontSize: '1.25rem',
  marginBottom: spacing.medium,
  color: colors.text
};

const footerText = {
  fontSize: '0.9rem',
  lineHeight: 1.6,
  color: colors.lightText
};

const socialLinks = {
  display: 'flex',
  gap: spacing.medium,
  marginTop: spacing.medium
};

const socialLink = {
  color: colors.lightText,
  fontSize: '1.5rem',
  transition: 'color 0.2s',
  ':hover': {
    color: colors.primary
  }
};

const linkList = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const footerLink = {
  color: colors.lightText,
  textDecoration: 'none',
  fontSize: '0.9rem',
  marginBottom: spacing.small,
  display: 'block',
  transition: 'color 0.2s',
  ':hover': {
    color: colors.primary
  }
};

const contactInfo = {
  marginTop: spacing.small
};

const contactItem = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing.small,
  marginBottom: spacing.small,
  color: colors.lightText
};

const contactIcon = {
  fontSize: '1.2rem'
};

const address = {
  ...footerText,
  marginTop: spacing.medium
};

const copyright = {
  textAlign: 'center',
  paddingTop: spacing.xlarge,
  borderTop: `1px solid ${colors.border}`,
  color: colors.lightText,
  fontSize: '0.9rem'
};

const legalLinks = {
  marginTop: spacing.small
};

const legalLink = {
  color: colors.lightText,
  textDecoration: 'none',
  margin: `0 ${spacing.small}`,
  ':hover': {
    color: colors.primary
  }
};

export default Footer;