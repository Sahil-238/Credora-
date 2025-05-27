
// // src/pages/Internships.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaLaptopCode, FaPython, FaJava, FaCertificate, FaUsers, FaProjectDiagram } from 'react-icons/fa';
// import Footer from '../components/Footer';

// // Design System Constants
// const colors = {
//   primary: '#2563eb',
//   secondary: '#0d9488',
//   background: '#f8fafc',
//   text: '#1e293b',
//   lightText: '#64748b',
//   lightBackground: '#e2e8f0'
// };

// const spacing = {
//   small: '8px',
//   medium: '16px',
//   large: '24px',
//   xlarge: '48px'
// };

// const fonts = {
//   primary: "'Inter', sans-serif",
//   heading: "'Poppins', sans-serif"
// };

// // Responsive styles
// const mediaQuery = '@media (max-width: 768px)';
// const responsiveStyles = {
//   sectionTitle: {
//     [mediaQuery]: {
//       fontSize: '1.5rem',
//       marginBottom: spacing.large
//     }
//   }
// };

// // States and effect for internships list
// const Internships = () => {
//   const [internships, setInternships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // New state for the application form
//   const [appName, setAppName] = useState('');
//   const [appEmail, setAppEmail] = useState('');
//   const [appDomain, setAppDomain] = useState('');
//   const [appMessage, setAppMessage] = useState('');
//   const [applicationResponse, setApplicationResponse] = useState('');

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/api/internships`)
//     .then(response => {
//         setInternships(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Handler for the application form submission
//   const handleApplicationSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/internships/apply`, {
//         name: appName,
//         email: appEmail,
//         domain: appDomain,
//         message: appMessage
//       });
//       setApplicationResponse("Application submitted successfully!");
//       // Clear form
//       setAppName('');
//       setAppEmail('');
//       setAppDomain('');
//       setAppMessage('');
//     } catch (error) {
//       console.error("Application submission error:", error);
//       setApplicationResponse("Failed to submit application. Please try again later.");
//     }
//   };

//   return (
//     <div style={pageStyle}>
//       {/* Hero Section */}
//       <header style={heroSection}>
//       <div style={imageWrapper}>
//           <img 
//             src="/images/internships-hero.jpg"  // Update with your image path
//             alt="Students working on internships"
//             style={headerImage}
//           />
//         </div>
//         <div style={textOverlay}>
//         <div style={heroContent}>
//           <h1 style={heroTitle}>Training & Internship Programs</h1>
//           <p style={heroSubtitle}>
//             Embark on a journey of growth and innovation with our comprehensive virtual programs
//           </p>
//         </div>
//         </div>
//       </header>

//       {/* Internships Grid */}
//       <section style={sectionStyle}>
//         {loading ? (
//           <div style={loadingStyle}>Loading internships...</div>
//         ) : error ? (
//           <div style={errorStyle}>{error}</div>
//         ) : (
//           <div style={programsGrid}>
//             {internships.map(internship => (
//               <div key={internship.id} style={programCard}>
//                 {getProgramIcon(internship.category)}
//                 <h3 style={programTitle}>{internship.title}</h3>
//                 <p style={programText}>{internship.description}</p>
//                 <Link to={`/internships/${internship.id}`} style={primaryButton}>
//                   Apply Now
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* New Application Form Section */}
//       <section style={applicationSectionStyle}>
//         <h2 style={sectionTitle}>Didn't find your desired domain?</h2>
//         <p style={formSubtitle}>
//           Fill out the form below to apply for an internship in your desired domain.
//         </p>
//         <form onSubmit={handleApplicationSubmit} style={applicationForm}>
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             value={appName}
//             onChange={(e) => setAppName(e.target.value)}
//             style={inputStyle}
//             required
//           />
//           <input 
//             type="email" 
//             placeholder="Your Email" 
//             value={appEmail}
//             onChange={(e) => setAppEmail(e.target.value)}
//             style={inputStyle}
//             required
//           />
//           <input 
//             type="text" 
//             placeholder="Desired Domain" 
//             value={appDomain}
//             onChange={(e) => setAppDomain(e.target.value)}
//             style={inputStyle}
//             required
//           />
//           <textarea 
//             placeholder="Tell us more (optional)" 
//             value={appMessage}
//             onChange={(e) => setAppMessage(e.target.value)}
//             style={textareaStyle}
//           ></textarea>
//           <button type="submit" style={primaryButton}>
//             Submit Application
//           </button>
//         </form>
//         {applicationResponse && <p style={responseMessageStyle}>{applicationResponse}</p>}
//       </section>

//       {/* Benefits Section */}
//       <section style={{...sectionStyle, backgroundColor: colors.lightBackground}}>
//         <h2 style={sectionTitle}>Program Benefits</h2>
//         <div style={benefitsGrid}>
//           <div style={benefitCard}>
//             <FaCertificate style={benefitIcon} />
//             <h4 style={benefitTitle}>Certification</h4>
//             <p style={benefitText}>Receive completion certificates</p>
//           </div>
          
//           <div style={benefitCard}>
//             <FaUsers style={benefitIcon} />
//             <h4 style={benefitTitle}>Expert Mentors</h4>
//             <p style={benefitText}>Learn from industry professionals</p>
//           </div>

//           <div style={benefitCard}>
//             <FaProjectDiagram style={benefitIcon} />
//             <h4 style={benefitTitle}>Real Projects</h4>
//             <p style={benefitText}>Work on actual industry projects</p>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section style={sectionStyle}>
//         <h2 style={sectionTitle}>Frequently Asked Questions</h2>
//         <div style={faqContainer}>
//           <div style={faqItem}>
//             <h4 style={faqQuestion}>Program Duration?</h4>
//             <p style={faqAnswer}>Flexible 1, 2, or 3 month options</p>
//           </div>
          
//           <div style={faqItem}>
//             <h4 style={faqQuestion}>Certification?</h4>
//             <p style={faqAnswer}>Yes, upon successful completion</p>
//           </div>

//           <div style={faqItem}>
//             <h4 style={faqQuestion}>Projects?</h4>
//             <p style={faqAnswer}>Real-world industry projects</p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// // Helper function to get icons based on category
// const getProgramIcon = (category) => {
//   const iconStyle = { fontSize: '2.5rem', color: colors.primary };
//   switch(category) {
//     case 'web': return <FaLaptopCode style={iconStyle} />;
//     case 'python': return <FaPython style={iconStyle} />;
//     case 'java': return <FaJava style={iconStyle} />;
//     default: return <FaLaptopCode style={iconStyle} />;
//   }
// };

// // Existing Styles for Internships Page
// const heroSection = {
//   position: 'relative',
//   minHeight: '70vh', // Use viewport height for better responsiveness
//   borderRadius: '0 0 30px 30px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
// };

// const imageWrapper = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1
// };
// const headerImage = {
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   filter: 'brightness(0.7)'
// };
// const textOverlay = {
//   position: 'relative',
//   zIndex: 2,
//   color: 'white',
//   height: '100%',
//   display: 'flex',
//   alignItems: 'flex-start', // Changed from 'center'
//   justifyContent: 'center',
//   paddingTop: '7%' // Adjust this value to control how far down
// };


// const sectionTitle = {
//   fontSize: '2rem',
//   fontFamily: fonts.heading,
//   textAlign: 'center',
//   marginBottom: spacing.xlarge,
//   color: colors.text
// };

// const pageStyle = {
//   fontFamily: fonts.primary,
//   color: colors.text,
//   lineHeight: 1.6
// };

// const heroContent = {
//   maxWidth: '1200px',
//   padding: spacing.xlarge,
//   textAlign: 'center',
//   width: '100%'
// };




// const heroTitle = {
//   fontSize: '3rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.medium,
//   textShadow: '0 2px 4px rgba(0,0,0,0.3)'
// };

// const heroSubtitle = {
//   fontSize: '1.5rem',
//   marginBottom: spacing.xlarge,
//   textShadow: '0 2px 4px rgba(0,0,0,0.3)',
//   maxWidth: '800px',
//   margin: '0 auto'
// };

// const sectionStyle = {
//   padding: `${spacing.xlarge} ${spacing.medium}`,
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// const programsGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: spacing.large,
//   marginTop: spacing.large
// };

// const programCard = {
//   padding: spacing.large,
//   borderRadius: '20px',
//   backgroundColor: 'white',
//   boxShadow: '0 6px 25px rgba(0,0,0,0.15)', // stronger shadow
//   textAlign: 'center'
// };

// const programTitle = {
//   fontSize: '1.5rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const programText = {
//   color: colors.lightText,
//   marginBottom: spacing.large
// };

// const primaryButton = {
//   display: 'inline-block',
//   padding: `${spacing.small} ${spacing.large}`,
//   backgroundColor: colors.secondary,
//   color: 'white',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   fontSize: '1rem',
//   transition: 'transform 0.2s',
//   // Hover effect not supported in inline styles without a library;
//   // you might use a CSS file or styled-components for that.
// };

// const benefitsGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   gap: spacing.large
// };

// const benefitCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   textAlign: 'center'
// };

// const benefitIcon = {
//   fontSize: '2rem',
//   color: colors.primary,
//   marginBottom: spacing.small
// };

// const benefitTitle = {
//   fontSize: '1.25rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const benefitText = {
//   color: colors.lightText
// };

// const faqContainer = {
//   maxWidth: '800px',
//   margin: '0 auto'
// };

// const faqItem = {
//   marginBottom: spacing.large,
//   padding: spacing.medium,
//   backgroundColor: 'white',
//   borderRadius: '8px',
//   boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// };

// const faqQuestion = {
//   color: colors.primary,
//   marginBottom: spacing.small
// };

// const faqAnswer = {
//   color: colors.lightText
// };

// const loadingStyle = {
//   textAlign: 'center',
//   padding: spacing.xlarge
// };

// const errorStyle = {
//   color: '#dc2626',
//   textAlign: 'center',
//   padding: spacing.xlarge
// };

// // New Styles for the Application Form Section
// const applicationSectionStyle = {
//   padding: `${spacing.xlarge} ${spacing.medium}`,
//   maxWidth: '1200px',
//   margin: '0 auto',
//   backgroundColor: colors.background,
//   textAlign: 'center'
// };

// const applicationForm = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: spacing.medium,
//   marginTop: spacing.medium
// };

// const inputStyle = {
//   width: '100%',
//   padding: spacing.medium,
//   borderRadius: '8px',
//   border: `1px solid ${colors.lightBackground}`,
//   fontSize: '1rem'
// };

// const textareaStyle = {
//   width: '100%',
//   padding: spacing.medium,
//   borderRadius: '8px',
//   border: `1px solid ${colors.lightBackground}`,
//   fontSize: '1rem',
//   minHeight: '100px'
// };

// const formSubtitle = {
//   fontSize: '1rem',
//   color: colors.lightText,
//   marginBottom: spacing.medium
// };

// const responseMessageStyle = {
//   marginTop: spacing.medium,
//   fontSize: '1rem',
//   color: colors.secondary
// };
// const responsiveHero = {
//   heroTitle: {
//     [mediaQuery]: {
//       fontSize: '2rem',
//       padding: `0 ${spacing.medium}`
//     }
//   },
//   heroSubtitle: {
//     [mediaQuery]: {
//       fontSize: '1.1rem',
//       padding: `0 ${spacing.medium}`
//     }
//   }
// };

// Object.assign(heroTitle, responsiveHero.heroTitle);
// Object.assign(heroSubtitle, responsiveHero.heroSubtitle);
// export default Internships;import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaPython,
  FaJava,
  FaCertificate,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import Footer from "../components/Footer";

// Internships Data
const internships = [
  {
    id: 1,
    title: "Frontend Development Internship",
    description: "Learn React and build UI components",
    category: "web",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97",
  },
  {
    id: 2,
    title: "Python Data Analysis Internship",
    description: "Gain hands-on experience in data analysis using Python",
    category: "python",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97",
  },
  {
    id: 3,
    title: "Java Backend Development Internship",
    description: "Work on backend systems using Java and Spring Boot",
    category: "java",
    googleFormUrl: "https://forms.gle/oQbxp8PJ1caBqth97",
  },
];

// Colors, fonts, etc.
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  background: "#f8fafc",
  dark: "#0f172a",
  text: "#1e293b",
  lightText: "#64748b",
  lightBackground: "#e2e8f0",
  glassBg: "rgba(255,255,255,0.09)",
  glassBlur: "blur(20px)",
  gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
};

// Global style for background, fonts, and keyframes
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Poppins:wght@600;700&display=swap');
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${colors.dark};
    color: ${colors.text};
    margin: 0;
    padding: 0;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px);}
    50% { transform: translateY(-20px);}
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

// Hero with animated background blobs
const HeroSection = styled.header`
  position: relative;
  min-height: 440px;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.13);
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Blobs = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.11;
  filter: blur(40px);
  animation: float ${({ duration }) => duration || 6}s ease-in-out infinite;
  background: ${({ gradient }) => gradient};
  width: ${({ size }) => size || "250px"};
  height: ${({ size }) => size || "250px"};
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 2rem 2rem;
  margin: 0 auto;
  animation: fadeInUp 1.1s cubic-bezier(0.4,0,0.2,1);
`;
const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 7vw, 3.3rem);
  font-family: 'Poppins', 'Inter', sans-serif;
  font-weight: 800;
  margin-bottom: 1.7rem;
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
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  position: absolute;
  top: 0; left: 0; z-index: 0;
`;

// Section and container
const Section = styled.section`
  padding: 4.5rem 1.7rem 3.2rem 1.7rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-family: 'Poppins', 'Inter', sans-serif;
  text-align: center;
  margin-bottom: 3.2rem;
  background: ${colors.gradient2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

// Internships
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  animation: fadeInUp 1.1s cubic-bezier(0.4,0,0.2,1);
`;

const ProgramCard = styled.div`
  padding: 2.3rem 1.5rem 2.1rem 1.5rem;
  border-radius: 20px;
  background: ${colors.glassBg};
  box-shadow: 0 8px 36px rgba(30,41,59,0.13);
  text-align: center;
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid rgba(255,255,255,0.11);
  transition: transform 0.26s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 64px rgba(99,102,241,0.13);
    border: 1.6px solid ${colors.primary};
  }
`;

const ProgramIcon = styled.div`
  font-size: 2.6rem;
  color: ${colors.primary};
  margin-bottom: 1.1rem;
`;

const ProgramTitle = styled.h3`
  font-size: 1.45rem;
  font-family: 'Poppins', 'Inter', sans-serif;
  margin-bottom: 0.7rem;
  color: #fff;
`;

const ProgramText = styled.p`
  color: ${colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.04rem;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.7rem 2.2rem;
  background: ${colors.gradient2};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.07rem;
  font-weight: 600;
  transition: transform 0.16s, box-shadow 0.17s;
  box-shadow: 0 2px 8px rgba(139,92,246,0.05);
  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: ${colors.gradient1};
    box-shadow: 0 4px 24px rgba(99,102,241,0.17);
  }
`;

// Application Form
const ApplicationSection = styled.section`
  padding: 4rem 1.7rem 3rem 1.7rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${colors.dark};
  text-align: center;
  animation: fadeInUp 1.3s cubic-bezier(0.4,0,0.2,1);
  border-radius: 24px;
  margin-top: 2.5rem;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: ${colors.lightText};
  margin-bottom: 1.1rem;
`;

const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-top: 1.1rem;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 1rem;
  border-radius: 8px;
  border: 1.3px solid ${colors.lightBackground};
  font-size: 1rem;
  background: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 420px;
  padding: 1rem;
  border-radius: 8px;
  border: 1.3px solid ${colors.lightBackground};
  font-size: 1rem;
  background: #fff;
  min-height: 100px;
`;

const ResponseMessage = styled.p`
  margin-top: 1.3rem;
  font-size: 1.05rem;
  color: ${colors.secondary};
`;


// Benefits
const BenefitsSection = styled.section`
  padding: 4.5rem 1.7rem 3rem 1.7rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${colors.lightBackground};
  border-radius: 24px;
  margin-top: 3rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2.3rem;
`;

const BenefitCard = styled.div`
  padding: 2.1rem 1.2rem 1.5rem 1.2rem;
  background: #fff;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 18px rgba(30,41,59,0.08);
  transition: transform 0.19s, box-shadow 0.16s;
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 32px rgba(99,102,241,0.09);
    border: 1.2px solid ${colors.primary};
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.2rem;
  color: ${colors.primary};
  margin-bottom: 0.8rem;
`;

const BenefitTitle = styled.h4`
  font-size: 1.19rem;
  font-family: 'Poppins', 'Inter', sans-serif;
  margin-bottom: 0.4rem;
`;

const BenefitText = styled.p`
  color: ${colors.lightText};
  font-size: 1.03rem;
`;

// FAQ Section
const FAQSection = styled.section`
  padding: 4rem 1.7rem 2.5rem 1.7rem;
  max-width: 900px;
  margin: 0 auto 2rem auto;
`;

const FAQGrid = styled.div`
  display: grid;
  gap: 1.7rem;
  margin-top: 1.5rem;
`;

const FAQItem = styled.div`
  padding: 1.2rem 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0,0,0,0.13);
  animation: fadeInUp 1.1s cubic-bezier(0.4,0,0.2,1);
  transition: box-shadow 0.18s;
  &:hover {
    box-shadow: 0 6px 18px rgba(99,102,241,0.09);
    border: 1.1px solid ${colors.primary};
  }
`;

const FAQQuestion = styled.h4`
  color: ${colors.primary};
  margin-bottom: 0.4rem;
  font-size: 1.08rem;
`;

const FAQAnswer = styled.p`
  color: ${colors.lightText};
  font-size: 1.01rem;
`;


// Main Component
const Internships = () => {
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appDomain, setAppDomain] = useState("");
  const [appMessage, setAppMessage] = useState("");
  const [applicationResponse, setApplicationResponse] = useState("");

  // Handler for the application form submission
  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setApplicationResponse("Application submitted successfully!");
    setAppName("");
    setAppEmail("");
    setAppDomain("");
    setAppMessage("");
  };

  // Helper function to get icons based on category
  const getProgramIcon = (category) => {
    switch (category) {
      case "web":
        return <ProgramIcon><FaLaptopCode /></ProgramIcon>;
      case "python":
        return <ProgramIcon><FaPython /></ProgramIcon>;
      case "java":
        return <ProgramIcon><FaJava /></ProgramIcon>;
      default:
        return <ProgramIcon><FaLaptopCode /></ProgramIcon>;
    }
  };

  return (
    <>
      <GlobalStyle />
      {/* Hero Section */}
      <HeroSection>
        <Blobs>
          <Blob gradient={colors.gradient1} size="300px" top="13%" right="15%" duration={8} />
          <Blob gradient={colors.gradient2} size="230px" bottom="17%" left="10%" duration={6} />
        </Blobs>
        <StyledImg
          src="/images/bg.jpg"
          alt="Students working on internships"
        />
        <HeroContent>
          <HeroTitle>Training & Internship Programs</HeroTitle>
          <HeroSubtitle>
            Embark on a journey of growth and innovation with our comprehensive virtual programs
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Internships Grid */}
      <Section>
        <SectionTitle>Available Internships</SectionTitle>
        <CardGrid>
          {internships.map((internship) => (
            <ProgramCard key={internship.id}>
              {getProgramIcon(internship.category)}
              <ProgramTitle>{internship.title}</ProgramTitle>
              <ProgramText>{internship.description}</ProgramText>
              <PrimaryButton
                href={internship.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </PrimaryButton>
            </ProgramCard>
          ))}
        </CardGrid>
      </Section>

      {/* Application Form */}
      <ApplicationSection>
        <SectionTitle>Didn't find your desired domain?</SectionTitle>
        <FormSubtitle>
          Fill out the form below to apply for an internship in your desired domain.
        </FormSubtitle>
        <ApplicationForm onSubmit={handleApplicationSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={appEmail}
            onChange={(e) => setAppEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Desired Domain"
            value={appDomain}
            onChange={(e) => setAppDomain(e.target.value)}
            required
          />
          <Textarea
            placeholder="Tell us more (optional)"
            value={appMessage}
            onChange={(e) => setAppMessage(e.target.value)}
          />
          <PrimaryButton as="button" type="submit">
            Submit Application
          </PrimaryButton>
        </ApplicationForm>
        {applicationResponse && (
          <ResponseMessage>{applicationResponse}</ResponseMessage>
        )}
      </ApplicationSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Program Benefits</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>
              <FaCertificate />
            </BenefitIcon>
            <BenefitTitle>Certification</BenefitTitle>
            <BenefitText>Receive completion certificates</BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>
              <FaUsers />
            </BenefitIcon>
            <BenefitTitle>Expert Mentors</BenefitTitle>
            <BenefitText>Learn from industry professionals</BenefitText>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>
              <FaProjectDiagram />
            </BenefitIcon>
            <BenefitTitle>Real Projects</BenefitTitle>
            <BenefitText>Work on actual industry projects</BenefitText>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      {/* FAQ Section */}
      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQGrid>
          <FAQItem>
            <FAQQuestion>Program Duration?</FAQQuestion>
            <FAQAnswer>Flexible 1, 2, or 3 month options</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Certification?</FAQQuestion>
            <FAQAnswer>Yes, upon successful completion</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>Projects?</FAQQuestion>
            <FAQAnswer>Real-world industry projects</FAQAnswer>
          </FAQItem>
        </FAQGrid>
      </FAQSection>

 
    </>
  );
};

export default Internships;