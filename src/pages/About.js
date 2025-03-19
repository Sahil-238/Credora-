// src/pages/About.js
import React from 'react';
import { FaUniversity, FaHandsHelping, FaAward, FaUsers } from 'react-icons/fa';
import Footer from '../components/Footer';

// Design System
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

// Styles
const pageStyle = {
  fontFamily: fonts.primary,
  color: colors.text,
  lineHeight: 1.6
};

const heroSection = {
  position: 'relative',
  minHeight: '500px',
  borderRadius: '0 0 30px 30px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};
const imageWrapper = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1
};
const headerImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.7)',
  animation: 'zoomOut 10s ease-in-out infinite'
};
const textOverlay = {
  position: 'relative',
  zIndex: 2,
  color: 'white',
  height: '100%',
  display: 'flex',
  alignItems: 'center'
};

const heroContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: spacing.xlarge,
  textAlign: 'center',
  width: '100%'
};

const heroTitle = {
  fontSize: '3rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.medium,
  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
};

const heroSubtitle = {
  fontSize: '1.5rem',
  marginBottom: spacing.xlarge,
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  maxWidth: '800px',
  margin: '0 auto'
};

const sectionStyle = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  maxWidth: '1200px',
  margin: '0 auto'
};

const sectionTitle = {
  fontSize: '2rem',
  fontFamily: fonts.heading,
  textAlign: 'center',
  marginBottom: spacing.xlarge
};

const missionText = {
  fontSize: '1rem',
  lineHeight: '1.6'
};

const missionContent = {
  display: 'grid',
  gap: spacing.xlarge,
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center'
};

const cardText = {
  color: colors.lightText,
  fontSize: '0.95rem'
};

const statsGrid = {
  display: 'grid',
  gap: spacing.large,
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
};

const statCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const iconStyle = {
  verticalAlign: 'middle',
  fontSize: '2rem'
};

const cardTitle = {
  fontSize: '1.25rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const valuesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.large
};

const valueCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  textAlign: 'center'
};

const iconContainer = {
  fontSize: '2.5rem',
  color: colors.primary,
  marginBottom: spacing.medium
};

const teamGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: spacing.large
};

const teamCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '0 auto',
  marginBottom: spacing.medium
};

const studentName = {
  fontWeight: 'bold',
  fontSize: '1.1rem'
};

const studentDetail = {
  fontSize: '0.9rem',
  color: colors.lightText
};

const footerStyle = {
  backgroundColor: colors.primary,
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  marginTop: '40px'
};

const footerContent = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const footerHeading = {
  fontSize: '1.5rem',
  marginBottom: '10px'
};

const footerGrid = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px'
};

const footerText = {
  margin: '5px 0'
};

// Data Arrays
const values = [
  {
    icon: <FaHandsHelping style={iconStyle} />,
    title: 'Student First Approach',
    description: 'Everything we do is focused on student success and growth'
  },
  {
    icon: <FaUsers style={iconStyle} />,
    title: 'Industry Collaboration',
    description: 'Strong partnerships with leading organizations'
  },
  {
    icon: <FaAward style={iconStyle} />,
    title: 'Quality Assurance',
    description: 'Rigorous standards for all our programs'
  }
];

const teamMembers = [
  {
    name: 'Anika Patel',
    position: 'CEO & Founder',
    bio: 'Education technology expert with 15+ years experience',
    avatar: 'https://via.placeholder.com/100'
  },
  {
    name: 'Rajesh Kumar',
    position: 'CTO',
    bio: 'Tech leader focused on scalable learning solutions',
    avatar: 'https://via.placeholder.com/100'
  }
];


const globalStyles = `
  @keyframes zoomOut {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const About = () => (
  <div style={pageStyle}>
        <style>{globalStyles}</style>

    {/* Hero Section */}
    <header style={heroSection}>
    <div style={imageWrapper}>
        <img 
          src="/images/about-hero.jpg" // Replace with your image path
          alt="Students collaborating"
          style={headerImage}
        />
      </div>
      <div style={textOverlay}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Empowering Student Success</h1>
          <p style={heroSubtitle}>Bridging academia and industry through meaningful experiences</p>
        </div>
        </div>
    </header>

    {/* Mission Section */}
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>Our Mission</h2>
      <div style={missionContent}>
        <div style={missionText}>
          <p style={cardText}>
            Credora is dedicated to providing students with valuable experiences and verifiable 
            certificates to enhance their academic profiles and career prospects. We partner with 
            industry leaders to create authentic learning opportunities.
          </p>
        </div>
        <div style={statsGrid}>
          <div style={statCard}>
            <FaUniversity style={iconStyle} />
            <h3 style={cardTitle}>500+ Colleges</h3>
            <p style={cardText}>Partner institutions nationwide</p>
          </div>
          <div style={statCard}>
            <FaAward style={iconStyle} />
            <h3 style={cardTitle}>10K+ Certificates</h3>
            <p style={cardText}>Issued to deserving students</p>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section style={{ ...sectionStyle, backgroundColor: colors.lightBackground }}>
      <h2 style={sectionTitle}>Our Values</h2>
      <div style={valuesGrid}>
        {values.map((value, index) => (
          <div key={index} style={valueCard}>
            <div style={iconContainer}>{value.icon}</div>
            <h3 style={cardTitle}>{value.title}</h3>
            <p style={cardText}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Team Section */}
    <section style={sectionStyle}>
      <h2 style={sectionTitle}>Leadership Team</h2>
      <div style={teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={teamCard}>
            {/* <img src={member.avatar} alt={member.name} style={avatarStyle} /> */}
            <h3 style={studentName}>{member.name}</h3>
            <p style={studentDetail}>{member.position}</p>
            <p style={cardText}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
        <Footer/>
    
  </div>
);

export default About;
