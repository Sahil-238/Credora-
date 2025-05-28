import React, { useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { FaSearch, FaCertificate, FaUserGraduate, FaCalendarAlt } from 'react-icons/fa';

// Colors and fonts
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  background: "#0f172a", // Dark background
  text: "#e2e8f0", // Light text for dark background
  lightText: "#94a3b8",
  lightBackground: "#1e293b", // Darker shade for cards
  error: "#ef4444",
  glassBg: "rgba(255,255,255,0.09)",
  glassBlur: "blur(20px)",
  gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
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
  position: relative;
  padding: ${spacing.xlarge} ${spacing.medium};
  color: white;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  text-align: center;
  min-height: 200px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, 
    rgba(30, 41, 59, 0.85) 50%, 
    rgba(51, 65, 85, 0.92) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 7vw, 3.3rem);
  font-family: ${fonts.heading};
  font-weight: 800;
  margin-bottom: ${spacing.medium};
  background: ${colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 6px rgba(30,41,59,0.15);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  margin-bottom: 1.5rem;
  color: #e0e6ed;
  text-shadow: 0 2px 4px rgba(0,0,0,0.13);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
`;

const HeroText = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #94a3b8;
  max-width: 600px;
  margin: 0.5rem auto 0;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const Section = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 1200px;
  margin: 50px auto;
`;

const FormContainer = styled.div`
  max-width: 900px;
  margin: -80px auto 0;
  text-align: center;
  background: ${colors.lightBackground};
  border-radius: 20px;
  box-shadow: 0 8px 36px rgba(30,41,59,0.13);
  padding: 3rem 2rem;
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid ${colors.glassBg};
  transition: transform 0.26s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 64px rgba(99,102,241,0.13);
  }
`;

const VerifyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const InputIcon = styled(FaCertificate)`
  position: absolute;
  left: calc(50% - 330px);
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.primary};
  font-size: 1.6rem;
  opacity: 0.8;
`;

const Input = styled.input`
  width: 100%;
  max-width: 700px;
  padding: 1.4rem 1.5rem 1.4rem 3.5rem;
  border-radius: 12px;
  background: ${colors.background};
  border: 1px solid ${colors.glassBg};
  color: ${colors.text};
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  transition: all 0.2s ease;
  outline: none;
  
  &::placeholder {
    color: ${colors.lightText};
    font-size: clamp(1rem, 2vw, 1.2rem);
  }

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}25;
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.small};
  padding: ${spacing.medium} ${spacing.large};
  background: ${colors.gradient2};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.07rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.16s, box-shadow 0.17s;
  box-shadow: 0 2px 8px rgba(139,92,246,0.05);
  
  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: ${colors.gradient1};
    box-shadow: 0 4px 24px rgba(99,102,241,0.17);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorText = styled.p`
  color: ${colors.error};
  margin-top: ${spacing.medium};
  font-weight: 500;
`;

const CertificateDetails = styled.div`
  margin-top: ${spacing.xlarge};
  padding: ${spacing.large};
  background: ${colors.lightBackground};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid ${colors.glassBg};
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
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${colors.glassBg};
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(99,102,241,0.15);
  }
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
  color: ${colors.text};
`;

const CardText = styled.p`
  color: ${colors.lightText};
  font-size: 1.04rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-family: ${fonts.heading};
  text-align: center;
  margin-bottom: ${spacing.xlarge};
  background: ${colors.gradient2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
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
          <div>
            <HeroTitle>Verify Your Certificate</HeroTitle>
            <HeroSubtitle>
              Certificate Authentication Portal
            </HeroSubtitle>
            <HeroText>
              Ensure the authenticity of your Credora certification
            </HeroText>
          </div>
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