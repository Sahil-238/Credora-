// src/pages/VerifyCertificate.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaCertificate, FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`http://localhost:5000/api/certificates/${certificateId}`);
      setCertificateData(response.data);
    } catch (err) {
      setError('Certificate not found or invalid.');
      setCertificateData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <header style={heroSection}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Verify Your Certificate</h1>
          <p style={heroSubtitle}>Ensure the authenticity of your Credora certification</p>
        </div>
      </header>

      {/* Verification Form */}
      <section style={sectionStyle}>
        <div style={formContainer}>
          <form onSubmit={handleVerify} style={verifyForm}>
            <div style={inputGroup}>
              <FaCertificate style={inputIcon} />
              <input
                type="text"
                placeholder="Enter certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <button 
              type="submit" 
              style={primaryButton}
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : (
                <>
                  <FaSearch style={buttonIcon} />
                  Verify Certificate
                </>
              )}
            </button>
          </form>

          {error && <p style={errorStyle}>{error}</p>}
        </div>

        {/* Certificate Details */}
        {certificateData && (
          <div style={certificateDetails}>
            <h2 style={sectionTitle}>Certificate Details</h2>
            <div style={detailsGrid}>
              <div style={detailCard}>
                <FaUserGraduate style={iconStyle} />
                <h3 style={cardTitle}>Student Name</h3>
                <p style={cardText}>{certificateData.studentName}</p>
              </div>
              <div style={detailCard}>
                <FaCertificate style={iconStyle} />
                <h3 style={cardTitle}>Internship</h3>
                <p style={cardText}>{certificateData.internshipName}</p>
              </div>
              <div style={detailCard}>
                <FaCalendarAlt style={iconStyle} />
                <h3 style={cardTitle}>Completion Date</h3>
                <p style={cardText}>
                  {new Date(certificateData.certificateDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        )}
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
  error: '#dc2626'
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
  maxWidth: '1200px',
  margin: '0 auto'
};

// Add the missing sectionTitle style here
const sectionTitle = {
  fontSize: '2rem',
  fontFamily: fonts.heading,
  textAlign: 'center',
  marginBottom: spacing.xlarge
};

// Form Styles
const formContainer = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center'
};

const verifyForm = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.medium
};

const inputGroup = {
  position: 'relative',
  width: '100%'
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
  paddingLeft: spacing.xlarge,
  borderRadius: '8px',
  border: `1px solid ${colors.lightBackground}`,
  fontSize: '1rem',
  transition: 'border-color 0.2s'
};

const primaryButton = {
  padding: `${spacing.medium} ${spacing.large}`,
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
  fontWeight: '500',
  transition: 'all 0.2s'
};

const buttonIcon = {
  fontSize: '1.2rem'
};

const errorStyle = {
  color: colors.error,
  marginTop: spacing.medium,
  fontWeight: '500'
};

// Certificate Details Styles
const certificateDetails = {
  marginTop: spacing.xlarge
};

const detailsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: spacing.large,
  marginTop: spacing.large
};

const detailCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const iconStyle = {
  fontSize: '2rem',
  color: colors.primary,
  marginBottom: spacing.medium
};

const cardTitle = {
  fontSize: '1.25rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const cardText = {
  color: colors.lightText,
  fontSize: '1rem'
};

export default VerifyCertificate;