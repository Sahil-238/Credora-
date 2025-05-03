import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaPython, FaJava, FaCertificate, FaUsers, FaProjectDiagram } from 'react-icons/fa';

// Hardcoded internships data with Google Form URLs
const internships = [
  {
    id: 1,
    title: "Frontend Development Internship",
    description: "Learn React and build UI components",
    category: "web",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97"
  },
  {
    id: 2,
    title: "Python Data Analysis Internship",
    description: "Gain hands-on experience in data analysis using Python",
    category: "python",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97"
  },
  {
    id: 3,
    title: "Java Backend Development Internship",
    description: "Work on backend systems using Java and Spring Boot",
    category: "java",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97"
  }
];

// Design System Constants
const colors = {
  primary: '#2563eb',
  secondary: '#0d9488',
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
  primary: "'Inter', sans-serif",
  heading: "'Poppins', sans-serif"
};

// States for the application form
const Internships = () => {
  const [appName, setAppName] = useState('');
  const [appEmail, setAppEmail] = useState('');
  const [appDomain, setAppDomain] = useState('');
  const [appMessage, setAppMessage] = useState('');
  const [applicationResponse, setApplicationResponse] = useState('');

  // Handler for the application form submission
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setApplicationResponse("Application submitted successfully!");
    // Clear form
    setAppName('');
    setAppEmail('');
    setAppDomain('');
    setAppMessage('');
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <header style={heroSection}>
        <div style={imageWrapper}>
          <img 
            src="/images/internships-hero.jpg"  // Update with your image path
            alt="Students working on internships"
            style={headerImage}
          />
        </div>
        <div style={textOverlay}>
          <div style={heroContent}>
            <h1 style={heroTitle}>Training & Internship Programs</h1>
            <p style={heroSubtitle}>
              Embark on a journey of growth and innovation with our comprehensive virtual programs
            </p>
          </div>
        </div>
      </header>

      {/* Internships Grid */}
      <section style={sectionStyle}>
        <div style={programsGrid}>
          {internships.map(internship => (
            <div key={internship.id} style={programCard}>
              {getProgramIcon(internship.category)}
              <h3 style={programTitle}>{internship.title}</h3>
              <p style={programText}>{internship.description}</p>
              {/* Changed Link to direct Google Form URL */}
              <a 
                href={internship.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={primaryButton}
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* New Application Form Section */}
      <section style={applicationSectionStyle}>
        <h2 style={sectionTitle}>Didn't find your desired domain?</h2>
        <p style={formSubtitle}>
          Fill out the form below to apply for an internship in your desired domain.
        </p>
        <form onSubmit={handleApplicationSubmit} style={applicationForm}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={inputStyle}
            required
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={appEmail}
            onChange={(e) => setAppEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input 
            type="text" 
            placeholder="Desired Domain" 
            value={appDomain}
            onChange={(e) => setAppDomain(e.target.value)}
            style={inputStyle}
            required
          />
          <textarea 
            placeholder="Tell us more (optional)" 
            value={appMessage}
            onChange={(e) => setAppMessage(e.target.value)}
            style={textareaStyle}
          ></textarea>
          <button type="submit" style={primaryButton}>
            Submit Application
          </button>
        </form>
        {applicationResponse && <p style={responseMessageStyle}>{applicationResponse}</p>}
      </section>

      {/* Benefits Section */}
      <section style={{...sectionStyle, backgroundColor: colors.lightBackground}}>
        <h2 style={sectionTitle}>Program Benefits</h2>
        <div style={benefitsGrid}>
          <div style={benefitCard}>
            <FaCertificate style={benefitIcon} />
            <h4 style={benefitTitle}>Certification</h4>
            <p style={benefitText}>Receive completion certificates</p>
          </div>

          <div style={benefitCard}>
            <FaUsers style={benefitIcon} />
            <h4 style={benefitTitle}>Expert Mentors</h4>
            <p style={benefitText}>Learn from industry professionals</p>
          </div>

          <div style={benefitCard}>
            <FaProjectDiagram style={benefitIcon} />
            <h4 style={benefitTitle}>Real Projects</h4>
            <p style={benefitText}>Work on actual industry projects</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Frequently Asked Questions</h2>
        <div style={faqContainer}>
          <div style={faqItem}>
            <h4 style={faqQuestion}>Program Duration?</h4>
            <p style={faqAnswer}>Flexible 1, 2, or 3 month options</p>
          </div>

          <div style={faqItem}>
            <h4 style={faqQuestion}>Certification?</h4>
            <p style={faqAnswer}>Yes, upon successful completion</p>
          </div>

          <div style={faqItem}>
            <h4 style={faqQuestion}>Projects?</h4>
            <p style={faqAnswer}>Real-world industry projects</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get icons based on category
const getProgramIcon = (category) => {
  const iconStyle = { fontSize: '2.5rem', color: colors.primary };
  switch(category) {
    case 'web': return <FaLaptopCode style={iconStyle} />;
    case 'python': return <FaPython style={iconStyle} />;
    case 'java': return <FaJava style={iconStyle} />;
    default: return <FaLaptopCode style={iconStyle} />;
  }
};

// Styles (same as before)
const heroSection = {
  position: 'relative',
  minHeight: '400px',
  borderRadius: '0 0 30px 30px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};
const sectionTitle = {
  fontSize: '2rem',
  fontFamily: fonts.heading,
  textAlign: 'center',
  marginBottom: spacing.xlarge,
  color: colors.text
}

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
  filter: 'brightness(0.7)'
};

const textOverlay = {
  position: 'relative',
  zIndex: 2,
  color: 'white',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '4%'
};

const heroContent = {
  maxWidth: '1200px',
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

const programsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.large,
  marginTop: spacing.large
};

const programCard = {
  padding: spacing.large,
  borderRadius: '20px',
  backgroundColor: 'white',
  boxShadow: '0 6px 25px rgba(0,0,0,0.15)',
  textAlign: 'center'
};

const programTitle = {
  fontSize: '1.5rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const programText = {
  color: colors.lightText,
  marginBottom: spacing.large
};

const primaryButton = {
  display: 'inline-block',
  padding: `${spacing.small} ${spacing.large}`,
  backgroundColor: colors.secondary,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'transform 0.2s'
};

const benefitsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: spacing.large
};

const benefitCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  textAlign: 'center'
};

const benefitIcon = {
  fontSize: '2rem',
  color: colors.primary,
  marginBottom: spacing.small
};

const benefitTitle = {
  fontSize: '1.25rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const benefitText = {
  color: colors.lightText
};

const faqContainer = {
  maxWidth: '800px',
  margin: '0 auto'
};

const faqItem = {
  marginBottom: spacing.large,
  padding: spacing.medium,
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const faqQuestion = {
  color: colors.primary,
  marginBottom: spacing.small
};

const faqAnswer = {
  color: colors.lightText
};

const applicationSectionStyle = {
  padding: `${spacing.xlarge} ${spacing.medium}`,
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: colors.background,
  textAlign: 'center',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const applicationForm = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.medium,
  marginTop: spacing.medium,
  padding: '20px'
};

const inputStyle = {
  width: '90%',
  maxWidth: '400px',
  padding: '12px',
  margin: '0 auto',
  borderRadius: '8px',
  border: `1px solid ${colors.lightBackground}`,
  fontSize: '0.9rem',
  height: '40px'
};

const textareaStyle = {
  width: '90%',
  maxWidth: '400px',
  padding: '12px',
  margin: '0 auto',
  borderRadius: '8px',
  border: `1px solid ${colors.lightBackground}`,
  fontSize: '0.9rem',
  minHeight: '80px',
  resize: 'vertical'
};

const formSubtitle = {
  fontSize: '1rem',
  color: colors.lightText,
  marginBottom: spacing.medium
};

const responseMessageStyle = {
  marginTop: spacing.medium,
  fontSize: '1rem',
  color: colors.secondary
};

const pageStyle = {
  fontFamily: fonts.primary,
  color: colors.text,
  lineHeight: 1.6
};

export default Internships;