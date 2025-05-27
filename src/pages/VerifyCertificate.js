// // src/pages/VerifyCertificate.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaSearch, FaCertificate, FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';

// const VerifyCertificate = () => {
//   const [certificateId, setCertificateId] = useState('');
//   const [certificateData, setCertificateData] = useState(null);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/certificates/${certificateId}`);
//       setCertificateData(response.data);
//     } catch (err) {
//       setError('Certificate not found or invalid.');
//       setCertificateData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={pageStyle}>
//       {/* Hero Section */}
//       <header style={heroSection}>
//         <div style={heroContent}>
//           <h1 style={heroTitle}>Verify Your Certificate</h1>
//           <p style={heroSubtitle}>Ensure the authenticity of your Credora certification</p>
//         </div>
//       </header>

//       {/* Verification Form */}
//       <section style={sectionStyle}>
//         <div style={formContainer}>
//           <form onSubmit={handleVerify} style={verifyForm}>
//             <div style={inputGroup}>
//               <FaCertificate style={inputIcon} />
//               <input
//                 type="text"
//                 placeholder="Enter certificate ID"
//                 value={certificateId}
//                 onChange={(e) => setCertificateId(e.target.value)}
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <button 
//               type="submit" 
//               style={primaryButton}
//               disabled={isLoading}
//             >
//               {isLoading ? 'Verifying...' : (
//                 <>
//                   <FaSearch style={buttonIcon} />
//                   Verify Certificate
//                 </>
//               )}
//             </button>
//           </form>

//           {error && <p style={errorStyle}>{error}</p>}
//         </div>

//         {/* Certificate Details */}
//         {certificateData && (
//           <div style={certificateDetails}>
//             <h2 style={sectionTitle}>Certificate Details</h2>
//             <div style={detailsGrid}>
//               <div style={detailCard}>
//                 <FaUserGraduate style={iconStyle} />
//                 <h3 style={cardTitle}>Student Name</h3>
//                 <p style={cardText}>{certificateData.studentName}</p>
//               </div>
//               <div style={detailCard}>
//                 <FaCertificate style={iconStyle} />
//                 <h3 style={cardTitle}>Internship</h3>
//                 <p style={cardText}>{certificateData.internshipName}</p>
//               </div>
//               <div style={detailCard}>
//                 <FaCalendarAlt style={iconStyle} />
//                 <h3 style={cardTitle}>Completion Date</h3>
//                 <p style={cardText}>
//                   {new Date(certificateData.certificateDate).toLocaleDateString()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// // Design System Constants
// const colors = {
//   primary: '#2563eb',
//   secondary: '#0d9488',
//   accent: '#f59e0b',
//   background: '#f8fafc',
//   text: '#1e293b',
//   lightText: '#64748b',
//   lightBackground: '#e2e8f0',
//   error: '#dc2626'
// };

// const spacing = {
//   small: '8px',
//   medium: '16px',
//   large: '24px',
//   xlarge: '48px'
// };

// const fonts = {
//   primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   heading: "'Poppins', sans-serif"
// };

// // Page Styles
// const pageStyle = {
//   fontFamily: fonts.primary,
//   color: colors.text,
//   lineHeight: 1.6
// };

// const heroSection = {
//   backgroundColor: colors.primary,
//   padding: `${spacing.xlarge} ${spacing.medium}`,
//   color: 'white',
//   borderRadius: '0 0 30px 30px',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
// };

// const heroContent = {
//   maxWidth: '1200px',
//   margin: '0 auto',
//   textAlign: 'center'
// };

// const heroTitle = {
//   fontSize: '2.5rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.medium
// };

// const heroSubtitle = {
//   fontSize: '1.2rem',
//   marginBottom: spacing.xlarge,
//   opacity: 0.9
// };

// const sectionStyle = {
//   padding: `${spacing.xlarge} ${spacing.medium}`,
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// // Add the missing sectionTitle style here
// const sectionTitle = {
//   fontSize: '2rem',
//   fontFamily: fonts.heading,
//   textAlign: 'center',
//   marginBottom: spacing.xlarge
// };

// // Form Styles
// const formContainer = {
//   maxWidth: '800px',
//   margin: '0 auto',
//   textAlign: 'center'
// };

// const verifyForm = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: spacing.medium
// };

// const inputGroup = {
//   position: 'relative',
//   width: '100%'
// };

// const inputIcon = {
//   position: 'absolute',
//   left: spacing.medium,
//   top: '50%',
//   transform: 'translateY(-50%)',
//   color: colors.lightText,
//   fontSize: '1.2rem'
// };

// const inputStyle = {
//   width: '100%',
//   padding: `${spacing.medium} ${spacing.medium} ${spacing.medium} ${spacing.xlarge}`,
//   paddingLeft: spacing.xlarge,
//   borderRadius: '8px',
//   border: `1px solid ${colors.lightBackground}`,
//   fontSize: '1rem',
//   transition: 'border-color 0.2s'
// };

// const primaryButton = {
//   padding: `${spacing.medium} ${spacing.large}`,
//   backgroundColor: colors.secondary,
//   color: 'white',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: spacing.small,
//   fontSize: '1rem',
//   fontWeight: '500',
//   transition: 'all 0.2s'
// };

// const buttonIcon = {
//   fontSize: '1.2rem'
// };

// const errorStyle = {
//   color: colors.error,
//   marginTop: spacing.medium,
//   fontWeight: '500'
// };

// // Certificate Details Styles
// const certificateDetails = {
//   marginTop: spacing.xlarge
// };

// const detailsGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//   gap: spacing.large,
//   marginTop: spacing.large
// };

// const detailCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'center'
// };

// const iconStyle = {
//   fontSize: '2rem',
//   color: colors.primary,
//   marginBottom: spacing.medium
// };

// const cardTitle = {
//   fontSize: '1.25rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const cardText = {
//   color: colors.lightText,
//   fontSize: '1rem'
// };

// export default VerifyCertificate;

import React, { useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSearch, FaCertificate, FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';

// Colors and fonts
const colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  background: '#f8fafc',
  text: '#1e293b',
  lightText: '#64748b',
  lightBackground: '#e2e8f0',
  error: '#dc2626'
};
const fonts = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  heading: "'Poppins', sans-serif"
};

const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px',
  xlarge: '48px'
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.primary};
    background: ${colors.background};
    color: ${colors.text};
  }
`;

// Styled components
const Page = styled.div`
  font-family: ${fonts.primary};
  color: ${colors.text};
  line-height: 1.6;
`;

const HeroSection = styled.header`
  background: linear-gradient(110deg, ${colors.primary} 80%, ${colors.secondary} 100%);
  padding: ${spacing.xlarge} ${spacing.medium};
  color: white;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 16px rgba(99,102,241,0.11);
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.7rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.medium};
  text-shadow: 0 2px 8px rgba(30,41,59,0.12);
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: ${spacing.xlarge};
  opacity: 0.93;
`;

const Section = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 1200px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  background: white;
  border-radius: 22px;
  box-shadow: 0 4px 22px rgba(99,102,241,0.07);
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  margin-top: -80px;
  position: relative;
  z-index: 2;
`;

const VerifyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

const InputIcon = styled(FaCertificate)`
  position: absolute;
  left: ${spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.lightText};
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: ${spacing.medium} ${spacing.medium} ${spacing.medium} ${spacing.xlarge};
  border-radius: 8px;
  border: 1.5px solid ${colors.lightBackground};
  font-size: 1.07rem;
  transition: border-color 0.2s;
  outline: none;
  &:focus {
    border-color: ${colors.primary};
  }
`;

const PrimaryButton = styled.button`
  padding: ${spacing.medium} ${spacing.large};
  background: linear-gradient(110deg, ${colors.secondary} 70%, ${colors.primary} 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.small};
  font-size: 1.07rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(99,102,241,0.09);
  &:hover {
    background: linear-gradient(110deg, ${colors.primary} 70%, ${colors.secondary} 100%);
    transform: translateY(-2px) scale(1.01);
  }
`;

const ErrorText = styled.p`
  color: ${colors.error};
  margin-top: ${spacing.medium};
  font-weight: 500;
`;

const CertificateDetails = styled.div`
  margin-top: ${spacing.xlarge};
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 18px rgba(99,102,241,0.09);
  padding: 2.5rem 1.2rem 2.2rem 1.2rem;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: ${spacing.large};
  margin-top: ${spacing.large};
`;

const DetailCard = styled.div`
  padding: ${spacing.large};
  background: ${colors.background};
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(30,41,59,0.07);
  text-align: center;
`;

const IconStyle = styled.div`
  font-size: 2.1rem;
  color: ${colors.primary};
  margin-bottom: ${spacing.medium};
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.small};
`;

const CardText = styled.p`
  color: ${colors.lightText};
  font-size: 1.04rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.heading};
  text-align: center;
  margin-bottom: ${spacing.xlarge};
`;

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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/certificates/${certificateId}`);
      setCertificateData(response.data);
    } catch (err) {
      setError('Certificate not found or invalid.');
      setCertificateData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>Verify Your Certificate</HeroTitle>
          <HeroSubtitle>
            Ensure the authenticity of your Credora certification
          </HeroSubtitle>
        </HeroSection>

        {/* Verification Form */}
        <Section>
          <FormContainer>
            <VerifyForm onSubmit={handleVerify}>
              <InputGroup>
                <InputIcon />
                <Input
                  type="text"
                  placeholder="Enter certificate ID"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  required
                />
              </InputGroup>
              <PrimaryButton type="submit" disabled={isLoading}>
                {isLoading ? 'Verifying...' : (
                  <>
                    <FaSearch style={{ fontSize: '1.2rem' }} />
                    Verify Certificate
                  </>
                )}
              </PrimaryButton>
            </VerifyForm>
            {error && <ErrorText>{error}</ErrorText>}
          </FormContainer>

          {/* Certificate Details */}
          {certificateData && (
            <CertificateDetails>
              <SectionTitle>Certificate Details</SectionTitle>
              <DetailsGrid>
                <DetailCard>
                  <IconStyle>
                    <FaUserGraduate />
                  </IconStyle>
                  <CardTitle>Student Name</CardTitle>
                  <CardText>{certificateData.studentName}</CardText>
                </DetailCard>
                <DetailCard>
                  <IconStyle>
                    <FaCertificate />
                  </IconStyle>
                  <CardTitle>Internship</CardTitle>
                  <CardText>{certificateData.internshipName}</CardText>
                </DetailCard>
                <DetailCard>
                  <IconStyle>
                    <FaCalendarAlt />
                  </IconStyle>
                  <CardTitle>Completion Date</CardTitle>
                  <CardText>
                    {new Date(certificateData.certificateDate).toLocaleDateString()}
                  </CardText>
                </DetailCard>
              </DetailsGrid>
            </CertificateDetails>
          )}
        </Section>
      </Page>
    </>
  );
};

export default VerifyCertificate;