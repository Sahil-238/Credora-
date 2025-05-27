// // src/pages/Home.js
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from 'react-router-dom';

// import { 
//   FaSearch, 
//   FaCertificate, 
//   FaUserGraduate, 
//   FaRocket,
//   FaCode, 
//   FaChartLine, 
//   FaPaintBrush, 
//   FaFlask, 
//   FaClock, 
//   FaMapMarker 
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// // Design System Constants
// const colors = {
//   primary: '#2563eb',
//   secondary: '#0d9488',
//   accent: '#f59e0b',
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
//   primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   heading: "'Poppins', sans-serif"
// };

// // Style Definitions
// const pageStyle = {
//   fontFamily: fonts.primary,
//   color: colors.text,
//   lineHeight: 1.6
// };

// const heroSection = {
//   position: 'relative',
//   minHeight: '400px',
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
//   alignItems: 'center'
// };

// const heroContent = {
//   maxWidth: '1200px',
//   margin: '0 auto',
//   padding: spacing.xlarge,
//   textAlign: 'left',
//   width: '100%'
// };
// const heroTitle = {
//     fontSize: '3rem',
//     fontFamily: fonts.heading,
//     marginBottom: spacing.medium,
//     textShadow: '0 2px 4px rgba(0,0,0,0.3)',
//     textAlign: 'center', // Added this line
//     width: '100%' // Ensures proper centering
//   };
// const heroSubtitle = {
//   fontSize: '1.5rem',
//   marginBottom: spacing.xlarge,
//   textShadow: '0 2px 4px rgba(0,0,0,0.3)'
// };

// const searchContainer = {
//     display: 'flex',
//     gap: spacing.medium,
//     justifyContent: 'center',
//     maxWidth: '800px',
//     margin: '0 auto',
//     width: '100%' // Added for better responsiveness
//   };
// const searchInput = {
//   flex: 1,
//   padding: `${spacing.small} ${spacing.medium}`,
//   borderRadius: '8px',
//   border: 'none',
//   fontSize: '1rem'
// };

// const primaryButton = {
//   padding: `${spacing.small} ${spacing.medium}`,
//   backgroundColor: colors.secondary,
//   color: 'white',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center', // centers content inside the button
//   gap: spacing.small,
//   transition: 'transform 0.2s',
//   margin: '0 auto', // centers the button itself in a block-level container
//   textDecoration: 'none'
// };


// const buttonIcon = {
//   fontSize: '1.2rem'
// };

// const sectionStyle = {
//   padding: `${spacing.xlarge} ${spacing.medium}`,
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// const sectionTitle = {
//   fontSize: '2rem',
//   fontFamily: fonts.heading,
//   textAlign: 'center',
//   marginBottom: spacing.xlarge
// };

// const featuresGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: spacing.large
// };

// const featureCard = {
//   padding: spacing.large,
//   borderRadius: '12px',
//   backgroundColor: 'white',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'center'
// };

// const iconContainer = {
//   fontSize: '2.5rem',
//   color: colors.primary,
//   marginBottom: spacing.medium
// };

// const iconStyle = {
//   verticalAlign: 'middle'
// };

// const cardTitle = {
//   fontSize: '1.25rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const cardText = {
//   color: colors.lightText,
//   fontSize: '0.95rem'
// };

// const testimonialGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//   gap: spacing.large
// };

// const testimonialCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
// };

// const testimonialText = {
//   fontSize: '1rem',
//   marginBottom: spacing.medium,
//   lineHeight: 1.5
// };

// const studentInfo = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: spacing.medium
// };

// const avatarStyle = {
//   width: '50px',
//   height: '50px',
//   borderRadius: '50%',
//   objectFit: 'cover'
// };

// const studentName = {
//   fontWeight: '600',
//   marginBottom: spacing.small
// };

// const studentDetail = {
//   color: colors.lightText,
//   fontSize: '0.9rem'
// };

// const footerStyle = {
//   backgroundColor: colors.primary,
//   color: 'white',
//   padding: spacing.xlarge,
//   marginTop: spacing.xlarge
// };

// const footerContent = {
//   maxWidth: '1200px',
//   margin: '0 auto',
//   textAlign: 'center'
// };

// const footerHeading = {
//   fontSize: '1.25rem',
//   marginBottom: spacing.large
// };

// const footerGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//   gap: spacing.large,
//   maxWidth: '600px',
//   margin: '0 auto'
// };

// const footerText = {
//   fontSize: '0.9rem',
//   marginBottom: spacing.small,
//   cursor: 'pointer',
//   ':hover': {
//     textDecoration: 'underline'
//   }
// };

// // Data Arrays
// const features = [
//   {
//     icon: <FaRocket style={iconStyle} />,
//     title: 'Curated Opportunities',
//     text: 'Hand-picked internships matching your skills and career goals'
//   },
//   {
//     icon: <FaCertificate style={iconStyle} />,
//     title: 'Verified Certificates',
//     text: 'Receive industry-recognized certificates upon completion'
//   },
//   {
//     icon: <FaUserGraduate style={iconStyle} />,
//     title: 'Student-Centric',
//     text: 'Designed specifically for undergraduate requirements'
//   }
// ];

// const testimonials = [
//   {
//     text: 'Credora helped me land my dream internship at a Fortune 500 company!',
//     name: 'Sarah Johnson',
//     college: 'Stanford University',
//     avatar: 'https://via.placeholder.com/50'
//   },
// ];

// // Media Queries
// const mediaQuery = '@media (max-width: 768px)';

// const responsiveStyles = {
//   heroSection: {
//     [mediaQuery]: {
//       minHeight: '500px'
//     }
//   },
//   heroTitle: {
//     [mediaQuery]: {
//       fontSize: '2rem'
//     }
//   },
//   heroSubtitle: {
//     [mediaQuery]: {
//       fontSize: '1.1rem'
//     }
//   },
//   heroContent: {
//     [mediaQuery]: {
//       padding: spacing.large,
//       textAlign: 'center'
//     }
//   }
// };

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: false
// };

// const sliderImages = [
//   "/images/slider1.png",
//   "/images/slider2.png",
//   "/images/slider3.png"
// ];

// const sliderContainer = {
//   maxWidth: "100%", 
//   textAlign: "center", 
//   padding: "20px"
// };


// const sliderImage = {
//   width: "150px", // Adjust as needed
//   height: "auto", // Maintain aspect ratio
//   objectFit: "contain",
//   display: "block",
//   margin: "0 auto"
// };
// // Test
// // New Style Definitions
// const domainsGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//   gap: spacing.large
// };

// const domainCard = {
//   padding: spacing.large,
//   textAlign: 'center',
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
// };

// const domainIcon = {
//   fontSize: '2.5rem',
//   color: colors.primary,
//   marginBottom: spacing.medium
// };

// const statsContainer = {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: spacing.xlarge,
//   flexWrap: 'wrap'
// };

// const statItem = {
//   textAlign: 'center'
// };

// const statValue = {
//   fontSize: '2.5rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const statLabel = {
//   fontSize: '1.1rem'
// };

// const stepsContainer = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   gap: spacing.xlarge
// };

// const stepCard = {
//   textAlign: 'center',
//   padding: spacing.large
// };

// const stepNumber = {
//   width: '50px',
//   height: '50px',
//   borderRadius: '50%',
//   backgroundColor: colors.primary,
//   color: 'white',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: '0 auto',
//   fontSize: '1.5rem',
//   marginBottom: spacing.medium
// };

// const opportunitiesGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: spacing.large
// };

// const opportunityCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
// };

// const opportunityMeta = {
//   display: 'flex',
//   gap: spacing.medium,
//   margin: `${spacing.medium} 0`
// };

// const metaItem = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: spacing.small,
//   color: colors.lightText
// };

// const partnersGrid = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'center',
//   gap: spacing.xlarge,
//   alignItems: 'center'
// };

// const partnerLogo = {
//   height: '40px',
//   width: 'auto',
//   opacity: 0.7,
//   transition: 'opacity 0.2s',
//   ':hover': {
//     opacity: 1
//   }
// };

// const ctaText = {
//   fontSize: '1.2rem',
//   marginBottom: spacing.xlarge,
//   maxWidth: '600px',
//   margin: '0 auto'
// };

// const ctaButtonGroup = {
//   display: 'flex',
//   gap: spacing.medium,
//   justifyContent: 'center',
//   flexWrap: 'wrap'
// };

// const secondaryButton = {
//   ...primaryButton,
//   width: 'auto', // Prevent full-width
//   backgroundColor: colors.secondary,
//   border: `2px solid `,
//   color: 'white'
// };


// // Add to style definitions
// const faqGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: spacing.medium,
//   maxWidth: '1000px',
//   margin: '0 auto'
// };

// const faqItemStyle = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'left'
// };

// const questionStyle = {
//   color: colors.primary,
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small,
//   fontSize: '1.1rem'
// };

// const answerStyle = {
//   color: colors.lightText,
//   lineHeight: 1.6
// };
// // Test
// // Data Arrays
// const domains = [
//   { icon: <FaCode />, title: 'Tech & Development', internships: 35 },
//   { icon: <FaChartLine />, title: 'Business & Marketing', internships: 89 },
//   { icon: <FaPaintBrush />, title: 'Design & Creative', internships: 52 },
//   { icon: <FaFlask />, title: 'Research & Science', internships: 98 }
// ];

// const stats = [
//   { value: 5000, label: 'Internships Offered' },
//   { value: 92, label: 'Success Rate (%)' },
//   { value: 35, label: 'Partner Companies' }
// ];

// const steps = [
//   {
//     title: 'Create Profile',
//     description: 'Register and complete your student profile'
//   },
//   {
//     title: 'Find Opportunities',
//     description: 'Browse curated internships matching your skills'
//   },
//   {
//     title: 'Apply & Get Selected',
//     description: 'Submit applications and get selected'
//   },
//   {
//     title: 'Complete & Certify',
//     description: 'Finish internship and get certified'
//   }
// ];

// const opportunities = [
//   {
//     title: 'Frontend Developer Intern',
//     duration: '3 Months',
//     location: 'Remote',
//     description: 'Work with modern JavaScript frameworks and build real-world applications'
//   },
//   {
//     title: 'Marketing Strategist',
//     duration: '2 Months',
//     location: 'Hybrid',
//     description: 'Develop and execute digital marketing campaigns'
//   }
// ];

// const partners = [
//   { name: 'Google', logo: '/logos/google.png' },
//   { name: 'Microsoft', logo: '/logos/microsoft.png' },
//   { name: 'Amazon', logo: '/logos/amazon.png' }
// ];
// // Add to data arrays
// const faqs = [
//   {
//     question: "What's the typical internship duration?",
//     answer: "We offer flexible durations from 1-6 months to fit academic schedules"
//   },
//   {
//     question: "Are the certificates recognized?",
//     answer: "All certificates are industry-verified and include verifiable digital credentials"
//   },
//   {
//     question: "Can I work on real projects?",
//     answer: "Yes! All internships involve hands-on projects with actual company datasets"
//   },
//   {
//     question: "Is there mentorship support?",
//     answer: "Dedicated mentors provide weekly guidance and career advice"
//   },
//   {
//     question: "Who's eligible to apply?",
//     answer: "Open to all undergraduate students regardless of year of study"
//   },
//   {
//     question: "How will my performance be evaluated?",
//     answer: "Your performance is assessed based on task completion, skill development, and feedback from mentors."
//   }
// ];

// // Apply responsive styles
// Object.assign(heroSection, responsiveStyles.heroSection);
// Object.assign(heroTitle, responsiveStyles.heroTitle);
// Object.assign(heroSubtitle, responsiveStyles.heroSubtitle);
// Object.assign(heroContent, responsiveStyles.heroContent);

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={pageStyle}>
//       {/* Hero Section */}
//       <header style={heroSection}>
//         <div style={imageWrapper}>
//           <img 
//             src="/images/hero-image.jpg" 
//             alt="Students collaborating"
//             style={headerImage}
//           />
//         </div>
//         <div style={textOverlay}>
//           <div style={heroContent}>
//             <h1 style={heroTitle}>Launch Your Career with Credora</h1>
//             <p style={heroSubtitle}>Bridge the gap between education and industry with curated internships & recognized certifications</p>
//             <button 
//             style={primaryButton}
//             onClick={() => navigate('/internships')}
//           >
//             Learn More
//           </button>
//             {/* <div style={searchContainer}>
//               <input 
//                 type="text" 
//                 placeholder="Search internships by domain or skill..." 
//                 style={searchInput}
//               />
//               <button style={primaryButton}>
//                 <FaSearch style={buttonIcon} /> Find Opportunities
//               </button>
//             </div> */}

//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section style={sectionStyle}>
//         <h2 style={sectionTitle}>Why Choose Credora?</h2>
//         <div style={featuresGrid}>
//           {features.map((feature, index) => (
//             <div key={index} style={featureCard}>
//               <div style={iconContainer}>{feature.icon}</div>
//               <h3 style={cardTitle}>{feature.title}</h3>
//               <p style={cardText}>{feature.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//             {/* Image Slider */}

//       <section style={sliderContainer}>
//         <h2 style={sectionTitle}>Products and Partners</h2>
//   <Slider {...sliderSettings}>
//     {sliderImages.map((img, index) => (
//       <div key={index}>
//         <img src={img} alt={`Slide ${index + 1}`} style={sliderImage} />
//       </div>
//     ))}
//   </Slider>
// </section>
//     {/* Test */}

// {/* Popular Domains Section */}
// <section style={sectionStyle}>
//   <h2 style={sectionTitle}>Explore Popular Domains</h2>
//   <div style={domainsGrid}>
//     {domains.map((domain, index) => (
//       <div key={index} style={domainCard}>
//         <div style={domainIcon}>{domain.icon}</div>
//         <h3 style={cardTitle}>{domain.title}</h3>
//         <p style={cardText}>{domain.internships}+ Opportunities</p>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Statistics Section */}
// <section style={{...sectionStyle, backgroundColor: colors.primary, color: 'white'}}>
//   <div style={statsContainer}>
//     {stats.map((stat, index) => (
//       <div key={index} style={statItem}>
//         <div style={statValue}>{stat.value}+</div>
//         <div style={statLabel}>{stat.label}</div>
//       </div>
//     ))}
//   </div>
// </section>

// {/* How It Works Section */}
// <section style={sectionStyle}>
//   <h2 style={sectionTitle}>How It Works</h2>
//   <div style={stepsContainer}>
//     {steps.map((step, index) => (
//       <div key={index} style={stepCard}>
//         <div style={stepNumber}>{index + 1}</div>
//         <h3 style={cardTitle}>{step.title}</h3>
//         <p style={cardText}>{step.description}</p>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Current Opportunities Section */}
// <section style={{...sectionStyle, backgroundColor: colors.lightBackground}}>
//   <h2 style={sectionTitle}>Featured Internships</h2>
//   <div style={opportunitiesGrid}>
//     {opportunities.map((opp, index) => (
//       <div key={index} style={opportunityCard}>
//         <h3 style={cardTitle}>{opp.title}</h3>
//         <div style={opportunityMeta}>
//           <span style={metaItem}><FaClock /> {opp.duration}</span>
//           <span style={metaItem}><FaMapMarker /> {opp.location}</span>
//         </div>
//         <p style={cardText}>{opp.description}</p>
//         {/* <button style={secondaryButton}>Apply Now</button> */}
//         <button 
//           style={secondaryButton} 
//           onClick={() => navigate('/internships')}
//           >
//             Apply Now
//           </button>
//         {/* <Link to="/internships" style={secondaryButton}>Apply Now</Link> */}
//         {/* <a 
//                 // href={internship.googleFormUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={secondaryButton}
//               >
//                 Apply Now
//               </a> */}
//       </div>
//     ))}
//   </div>
// </section>

// {/* Partners Section
// <section style={sectionStyle}>
//   <h2 style={sectionTitle}>Trusted By Leading Companies</h2>
//   <div style={partnersGrid}>
//     {partners.map((partner, index) => (
//       <img 
//         key={index} 
//         src={partner.logo} 
//         alt={partner.name} 
//         style={partnerLogo} 
//       />
//     ))}
//   </div>
// </section> */}
// <section style={sectionStyle}>
//   <h2 style={sectionTitle}>Frequently Asked Questions</h2>
//   <div style={faqGrid}>
//     {faqs.map((faq, index) => (
//       <div key={index} style={faqItemStyle}>
//         <h3 style={questionStyle}>{faq.question}</h3>
//         <p style={answerStyle}>{faq.answer}</p>
//       </div>
//     ))}
//   </div>
// </section>
// {/* CTA Section */}
// <section style={{...sectionStyle, textAlign: 'center'}}>
//   <h2 style={sectionTitle}>Ready to Launch Your Career?</h2>
//   <p style={ctaText}>Join thousands of students who've transformed their careers through Credora</p>
//   <br />
//   <div style={ctaButtonGroup}>
//     <Link to="/internships" style={primaryButton}>Browse Internships</Link>
//     {/* <Link to="/signup" style={secondaryButton}>Create Account</Link> */}
//   </div>
// </section>
//     {/* Test */}
//     </div>
//   );
// };

// export default Home;




// // src/pages/Home.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { 
//   FaRocket,
//   FaCode, 
//   FaChartLine, 
//   FaPaintBrush, 
//   FaFlask, 
//   FaBuilding,
//   FaUsers,
//   FaHandshake,
//   FaLightbulb,
//   FaGraduationCap,
//   FaStar,
//   FaCheckCircle,
//   FaArrowRight,
//   FaPlay,
//   FaShieldAlt,
//   FaCrown,
//   FaFire
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// // Advanced Design System
// const colors = {
//   primary: '#6366f1',
//   secondary: '#8b5cf6',
//   accent: '#f59e0b',
//   success: '#10b981',
//   dark: '#0f172a',
//   darkCard: '#1e293b',
//   gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//   gradient3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//   gradient4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
//   gradientText: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   glassBg: 'rgba(255, 255, 255, 0.1)',
//   glassBlur: 'blur(20px)'
// };

// const animations = {
//   fadeInUp: {
//     opacity: 0,
//     transform: 'translateY(30px)',
//     transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
//   },
//   slideInLeft: {
//     opacity: 0,
//     transform: 'translateX(-50px)',
//     transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//   },
//   float: {
//     animation: 'float 6s ease-in-out infinite'
//   }
// };

// // Enhanced Styles with Glassmorphism & Modern Effects
// const pageStyle = {
//   fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   background: '#0f172a',
//   color: 'white',
//   minHeight: '100vh',
//   overflow: 'hidden'
// };

// const heroSection = {
//   position: 'relative',
//   minHeight: '100vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
//   overflow: 'hidden'
// };

// const backgroundBlobs = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   overflow: 'hidden'
// };

// const blob1Style = {
//   position: 'absolute',
//   top: '10%',
//   right: '15%',
//   width: '300px',
//   height: '300px',
//   background: colors.gradient1,
//   borderRadius: '50%',
//   opacity: 0.1,
//   filter: 'blur(40px)',
//   animation: 'float 8s ease-in-out infinite'
// };

// const blob2Style = {
//   position: 'absolute',
//   bottom: '20%',
//   left: '10%',
//   width: '250px',
//   height: '250px',
//   background: colors.gradient2,
//   borderRadius: '50%',
//   opacity: 0.1,
//   filter: 'blur(40px)',
//   animation: 'float 6s ease-in-out infinite reverse'
// };

// const heroContent = {
//   position: 'relative',
//   zIndex: 10,
//   textAlign: 'center',
//   maxWidth: '900px',
//   padding: '0 2rem'
// };

// const heroTitle = {
//   fontSize: 'clamp(2.5rem, 8vw, 5rem)',
//   fontWeight: '800',
//   marginBottom: '1.5rem',
//   background: colors.gradientText,
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   backgroundClip: 'text',
//   lineHeight: 1.1
// };

// const heroSubtitle = {
//   fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
//   marginBottom: '3rem',
//   opacity: 0.8,
//   lineHeight: 1.6,
//   maxWidth: '600px',
//   margin: '0 auto 3rem auto'
// };

// const ctaContainer = {
//   display: 'flex',
//   gap: '1.5rem',
//   justifyContent: 'center',
//   flexWrap: 'wrap',
//   marginBottom: '4rem'
// };

// const primaryCTA = {
//   padding: '1rem 2.5rem',
//   background: colors.gradient1,
//   border: 'none',
//   borderRadius: '50px',
//   color: 'white',
//   fontSize: '1.1rem',
//   fontWeight: '600',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.5rem',
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   boxShadow: '0 10px 40px rgba(102, 102, 255, 0.3)',
//   textDecoration: 'none',
//   ':hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 15px 50px rgba(102, 102, 255, 0.4)'
//   }
// };

// const secondaryCTA = {
//   padding: '1rem 2.5rem',
//   background: colors.glassBg,
//   border: '1px solid rgba(255, 255, 255, 0.2)',
//   borderRadius: '50px',
//   color: 'white',
//   fontSize: '1.1rem',
//   fontWeight: '600',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.5rem',
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   backdropFilter: colors.glassBlur,
//   textDecoration: 'none',
//   ':hover': {
//     background: 'rgba(255, 255, 255, 0.15)',
//     transform: 'translateY(-2px)'
//   }
// };

// const trustIndicators = {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '3rem',
//   flexWrap: 'wrap',
//   opacity: 0.6
// };

// const trustItem = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.5rem',
//   fontSize: '0.9rem'
// };

// const sectionStyle = {
//   padding: '8rem 2rem',
//   position: 'relative'
// };

// const containerStyle = {
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// const sectionTitle = {
//   fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//   fontWeight: '700',
//   textAlign: 'center',
//   marginBottom: '4rem',
//   background: colors.gradientText,
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   backgroundClip: 'text'
// };

// const servicesGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//   gap: '2rem',
//   marginBottom: '4rem'
// };

// const serviceCard = {
//   background: colors.glassBg,
//   backdropFilter: colors.glassBlur,
//   border: '1px solid rgba(255, 255, 255, 0.1)',
//   borderRadius: '24px',
//   padding: '2.5rem',
//   transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   position: 'relative',
//   overflow: 'hidden',
//   ':hover': {
//     transform: 'translateY(-8px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)'
//   }
// };

// const cardGradient = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   height: '4px',
//   background: colors.gradient1
// };

// const iconContainer = {
//   width: '60px',
//   height: '60px',
//   borderRadius: '16px',
//   background: colors.gradient1,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginBottom: '1.5rem',
//   fontSize: '1.5rem'
// };

// const cardTitle = {
//   fontSize: '1.5rem',
//   fontWeight: '700',
//   marginBottom: '1rem',
//   color: 'white'
// };

// const cardDescription = {
//   color: 'rgba(255, 255, 255, 0.7)',
//   marginBottom: '1.5rem',
//   lineHeight: 1.6
// };

// const benefitsList = {
//   listStyle: 'none',
//   margin: 0,
//   padding: 0
// };

// const benefitItem = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.75rem',
//   marginBottom: '0.75rem',
//   color: 'rgba(255, 255, 255, 0.8)',
//   fontSize: '0.9rem'
// };

// const statsSection = {
//   background: colors.gradient1,
//   borderRadius: '32px',
//   padding: '4rem 2rem',
//   margin: '6rem auto',
//   maxWidth: '1000px',
//   position: 'relative',
//   overflow: 'hidden'
// };

// const statsGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//   gap: '2rem',
//   textAlign: 'center'
// };

// const statCard = {
//   background: colors.glassBg,
//   backdropFilter: colors.glassBlur,
//   borderRadius: '20px',
//   padding: '2rem',
//   border: '1px solid rgba(255, 255, 255, 0.2)'
// };

// const statNumber = {
//   fontSize: '3rem',
//   fontWeight: '800',
//   color: '#fbbf24',
//   marginBottom: '0.5rem'
// };

// const statLabel = {
//   fontSize: '1rem',
//   opacity: 0.9
// };

// const processSection = {
//   background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
//   borderRadius: '32px',
//   padding: '6rem 2rem',
//   margin: '6rem auto',
//   maxWidth: '1200px'
// };

// const processGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   gap: '3rem'
// };

// const processCard = {
//   textAlign: 'center',
//   position: 'relative'
// };

// const processNumber = {
//   width: '80px',
//   height: '80px',
//   borderRadius: '50%',
//   background: colors.gradient2,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: '0 auto 1.5rem auto',
//   fontSize: '1.5rem',
//   fontWeight: '700',
//   boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
// };

// const testimonialSection = {
//   padding: '8rem 2rem'
// };

// const testimonialGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
//   gap: '2rem'
// };

// const testimonialCard = {
//   background: colors.glassBg,
//   backdropFilter: colors.glassBlur,
//   border: '1px solid rgba(255, 255, 255, 0.1)',
//   borderRadius: '24px',
//   padding: '2.5rem',
//   position: 'relative'
// };

// const testimonialText = {
//   fontSize: '1.1rem',
//   lineHeight: 1.6,
//   marginBottom: '2rem',
//   fontStyle: 'italic',
//   color: 'rgba(255, 255, 255, 0.9)'
// };

// const clientInfo = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: '1rem'
// };

// const clientAvatar = {
//   width: '50px',
//   height: '50px',
//   borderRadius: '50%',
//   background: colors.gradient3
// };

// const clientDetails = {
//   display: 'flex',
//   flexDirection: 'column'
// };

// const clientName = {
//   fontWeight: '600',
//   color: 'white'
// };

// const clientRole = {
//   fontSize: '0.9rem',
//   color: 'rgba(255, 255, 255, 0.6)'
// };

// const finalCTA = {
//   background: colors.gradient4,
//   borderRadius: '32px',
//   padding: '6rem 2rem',
//   textAlign: 'center',
//   margin: '6rem auto 4rem auto',
//   maxWidth: '1000px'
// };

// const finalCTATitle = {
//   fontSize: 'clamp(2rem, 5vw, 3rem)',
//   fontWeight: '700',
//   marginBottom: '1.5rem',
//   color: colors.dark
// };

// const finalCTAText = {
//   fontSize: '1.2rem',
//   marginBottom: '3rem',
//   opacity: 0.8,
//   color: colors.dark,
//   maxWidth: '600px',
//   margin: '0 auto 3rem auto'
// };

// const finalCTAButtons = {
//   display: 'flex',
//   gap: '1.5rem',
//   justifyContent: 'center',
//   flexWrap: 'wrap'
// };

// const darkButton = {
//   padding: '1rem 2.5rem',
//   background: colors.dark,
//   border: 'none',
//   borderRadius: '50px',
//   color: 'white',
//   fontSize: '1.1rem',
//   fontWeight: '600',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.5rem',
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   textDecoration: 'none',
//   ':hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: '0 10px 30px rgba(15, 23, 42, 0.3)'
//   }
// };

// // Add floating animation keyframes
// const globalStyles = `
//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-20px); }
//   }
  
//   @keyframes pulse {
//     0%, 100% { opacity: 0.6; }
//     50% { opacity: 1; }
//   }
  
//   * {
//     box-sizing: border-box;
//   }
  
//   body {
//     margin: 0;
//     padding: 0;
//   }
// `;

// // Data
// const services = [
//   {
//     icon: <FaUsers />,
//     title: 'Elite Talent Acquisition',
//     description: 'Access pre-screened, top-tier professionals ready to transform your business from day one.',
//     benefits: [
//       'AI-powered skill matching',
//       'Cultural fit assessment',
//       '99% retention rate',
//       'Instant deployment ready'
//     ],
//     gradient: colors.gradient1
//   },
//   {
//     icon: <FaRocket />,
//     title: 'Full-Stack Solutions',
//     description: 'End-to-end project delivery with our certified teams of industry experts.',
//     benefits: [
//       'Agile methodology',
//       'Real-time collaboration',
//       'Quality guaranteed',
//       '24/7 support included'
//     ],
//     gradient: colors.gradient2
//   },
//   {
//     icon: <FaLightbulb />,
//     title: 'Innovation Consulting',
//     description: 'Strategic guidance to revolutionize your business with cutting-edge technology.',
//     benefits: [
//       'Future-proof strategies',
//       'Market intelligence',
//       'ROI optimization',
//       'Competitive advantage'
//     ],
//     gradient: colors.gradient3
//   }
// ];

// const stats = [
//   { value: '500+', label: 'Projects Delivered', icon: <FaRocket /> },
//   { value: '99%', label: 'Client Satisfaction', icon: <FaStar /> },
//   { value: '150+', label: 'Enterprise Clients', icon: <FaBuilding /> },
//   { value: '24/7', label: 'Premium Support', icon: <FaShieldAlt /> }
// ];

// const process = [
//   {
//     title: 'Discovery Call',
//     description: 'Deep-dive consultation to understand your vision and requirements'
//   },
//   {
//     title: 'Strategic Planning',
//     description: 'Custom solution architecture and expert team assembly'
//   },
//   {
//     title: 'Flawless Execution',
//     description: 'Agile delivery with continuous communication and updates'
//   },
//   {
//     title: 'Ongoing Success',
//     description: 'Measurable results with dedicated support and optimization'
//   }
// ];

// const testimonials = [
//   {
//     text: 'Credora transformed our entire development pipeline. Their elite team delivered solutions that exceeded every expectation. Simply incredible.',
//     name: 'David Chen',
//     role: 'CTO, TechFlow Inc.',
//     company: 'Fortune 500'
//   },
//   {
//     text: 'The level of expertise and professionalism is unmatched. They delivered our complex AI project 2 weeks ahead of schedule.',
//     name: 'Sarah Rodriguez',
//     role: 'VP Engineering, DataVision',
//     company: 'Series B Startup'
//   }
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     // Add global styles
//     const styleSheet = document.createElement("style");
//     styleSheet.innerText = globalStyles;
//     document.head.appendChild(styleSheet);
    
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   const handleCTAClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div style={pageStyle}>
//       {/* Hero Section */}
//       <section style={heroSection}>
//         <div style={backgroundBlobs}>
//           <div style={blob1Style}></div>
//           <div style={blob2Style}></div>
//         </div>
        
//         <div style={heroContent}>
//           <h1 style={heroTitle}>
//             Premium Solutions.<br />
//             Extraordinary Results.
//           </h1>
//           <p style={heroSubtitle}>
//             Partner with industry leaders for cutting-edge technology solutions, 
//             elite talent acquisition, and transformational business growth.
//           </p>
          
//           <div style={ctaContainer}>
//             <button 
//               style={primaryCTA}
//               onClick={() => handleCTAClick('/contact')}
//             >
//               <FaHandshake /> Start Your Transformation
//               <FaArrowRight />
//             </button>
//             <button 
//               style={secondaryCTA}
//               onClick={() => handleCTAClick('/portfolio')}
//             >
//               <FaPlay /> Watch Success Stories
//             </button>
//           </div>
          
//           <div style={trustIndicators}>
//             <div style={trustItem}>
//               <FaCrown style={{color: '#fbbf24'}} />
//               Fortune 500 Trusted
//             </div>
//             <div style={trustItem}>
//               <FaShieldAlt style={{color: '#10b981'}} />
//               Enterprise Grade
//             </div>
//             <div style={trustItem}>
//               <FaFire style={{color: '#f59e0b'}} />
//               Industry Leading
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section style={sectionStyle}>
//         <div style={containerStyle}>
//           <h2 style={sectionTitle}>Premium Services</h2>
//           <div style={servicesGrid}>
//             {services.map((service, index) => (
//               <div key={index} style={serviceCard}>
//                 <div style={{...cardGradient, background: service.gradient}}></div>
//                 <div style={{...iconContainer, background: service.gradient}}>
//                   {service.icon}
//                 </div>
//                 <h3 style={cardTitle}>{service.title}</h3>
//                 <p style={cardDescription}>{service.description}</p>
//                 <ul style={benefitsList}>
//                   {service.benefits.map((benefit, idx) => (
//                     <li key={idx} style={benefitItem}>
//                       <FaCheckCircle style={{color: '#10b981', minWidth: '16px'}} />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section style={sectionStyle}>
//         <div style={containerStyle}>
//           <div style={statsSection}>
//             <div style={statsGrid}>
//               {stats.map((stat, index) => (
//                 <div key={index} style={statCard}>
//                   <div style={{fontSize: '2rem', marginBottom: '1rem', color: '#fbbf24'}}>
//                     {stat.icon}
//                   </div>
//                   <div style={statNumber}>{stat.value}</div>
//                   <div style={statLabel}>{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section style={sectionStyle}>
//         <div style={containerStyle}>
//           <div style={processSection}>
//             <h2 style={{...sectionTitle, marginBottom: '4rem'}}>Our Process</h2>
//             <div style={processGrid}>
//               {process.map((step, index) => (
//                 <div key={index} style={processCard}>
//                   <div style={processNumber}>{index + 1}</div>
//                   <h3 style={cardTitle}>{step.title}</h3>
//                   <p style={cardDescription}>{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section style={testimonialSection}>
//         <div style={containerStyle}>
//           <h2 style={sectionTitle}>Client Success Stories</h2>
//           <div style={testimonialGrid}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} style={testimonialCard}>
//                 <p style={testimonialText}>"{testimonial.text}"</p>
//                 <div style={clientInfo}>
//                   <div style={clientAvatar}></div>
//                   <div style={clientDetails}>
//                     <div style={clientName}>{testimonial.name}</div>
//                     <div style={clientRole}>{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Secondary CTA - Internship */}
//       <section style={sectionStyle}>
//         <div style={containerStyle}>
//           <div style={{...serviceCard, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
//             <div style={{...iconContainer, margin: '0 auto 1.5rem auto'}}>
//               <FaGraduationCap />
//             </div>
//             <h3 style={cardTitle}>Building Tomorrow's Workforce</h3>
//             <p style={cardDescription}>
//               We also nurture emerging talent through our elite internship program, 
//               creating the skilled professionals your industry demands.
//             </p>
//             <button 
//               style={{...secondaryCTA, margin: '1rem auto 0 auto'}}
//               onClick={() => handleCTAClick('/internships')}
//             >
//               Explore Internship Program
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section style={sectionStyle}>
//         <div style={containerStyle}>
//           <div style={finalCTA}>
//             <h2 style={finalCTATitle}>Ready to Transform Your Business?</h2>
//             <p style={finalCTAText}>
//               Join the elite companies who trust Credora for their most critical projects. 
//               Let's create something extraordinary together.
//             </p>
//             <div style={finalCTAButtons}>
//               <button 
//                 style={darkButton}
//                 onClick={() => handleCTAClick('/contact')}
//               >
//                 <FaHandshake /> Schedule Consultation
//               </button>
//               <button 
//                 style={{...darkButton, background: 'transparent', border: `2px solid ${colors.dark}`}}
//                 onClick={() => handleCTAClick('/case-studies')}
//               >
//                 <FaStar /> View Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaCode,
  FaChartLine,
  FaPaintBrush,
  FaFlask,
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaGraduationCap,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaCrown,
  FaFire,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// COLORS & GRADIENTS
const colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  success: '#10b981',
  dark: '#0f172a',
  darkCard: '#1e293b',
  gradient1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  gradient2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  gradient3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  gradient4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  glassBg: 'rgba(255,255,255,0.09)',
  glassBlur: 'blur(20px)',
  gradientText: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

// GLOBAL STYLES
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${colors.dark};
    color: #fff;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.dark};
  color: white;
  overflow: hidden;
`;

// HERO SECTION
const VideoBackground = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  object-fit: cover;
  opacity: 0.6;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(51, 65, 85, 0.85) 100%);
  z-index: 1;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  opacity: 0.13;
  filter: blur(40px);
  animation: float ${({duration}) => duration || 6}s ease-in-out infinite;
  background: ${({gradient}) => gradient};
  width: ${({size}) => size || '250px'};
  height: ${({size}) => size || '250px'};
  top: ${({top}) => top || 'auto'};
  left: ${({left}) => left || 'auto'};
  right: ${({right}) => right || 'auto'};
  bottom: ${({bottom}) => bottom || 'auto'};
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: ${colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: 3rem;
  opacity: 0.85;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: ${({secondary}) => secondary ? colors.glassBg : colors.gradient1};
  border: ${({secondary}) => secondary ? '1px solid rgba(255,255,255,0.2)' : 'none'};
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  box-shadow: ${({secondary}) => secondary ? 'none' : '0 10px 40px rgba(102, 102, 255, 0.3)'};
  text-decoration: none;
  backdrop-filter: ${({secondary}) => secondary ? colors.glassBlur : 'none'};
  &:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: ${({secondary}) => secondary ? 'none' : '0 15px 50px rgba(102, 102, 255, 0.4)'};
    background: ${({secondary}) => secondary ? 'rgba(255,255,255,0.15)' : colors.gradient1};
  }
`;

const TrustIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  opacity: 0.6;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
`;

// SECTIONS
const Section = styled.section`
  padding: 4rem 2rem;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: ${colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// SERVICES
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border: 1px solid rgba(255,255,255,0.2);
  }
`;

const CardGradient = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: ${({gradient}) => gradient};
`;

const IconContainer = styled.div`
  width: 60px; height: 60px;
  border-radius: 16px;
  background: ${({gradient}) => gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const CardDescription = styled.p`
  color: rgba(255,255,255,0.78);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BenefitsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: rgba(255,255,255,0.86);
  font-size: 0.98rem;
`;

// STATS
const StatsSection = styled.div`
  background: ${colors.gradient1};
  border-radius: 32px;
  padding: 4rem 2rem;
  margin: 6rem auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatCard = styled.div`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.2);
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fbbf24;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

// PROCESS
const ProcessSectionBox = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 32px;
  padding: 4rem 2rem;
  margin: 3rem auto;
  max-width: 1200px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProcessCard = styled.div`
  text-align: center;
  position: relative;
`;

const ProcessNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${colors.gradient2};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 10px 30px rgba(139,92,246,0.3);
`;

// TESTIMONIALS
const TestimonialSection = styled.section`
  padding: 8rem 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
  color: rgba(255,255,255,0.92);
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ClientAvatar = styled.div`
  width: 50px; height: 50px;
  border-radius: 50%;
  background: ${colors.gradient3};
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.div`
  font-weight: 600;
  color: white;
`;

const ClientRole = styled.div`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
`;

// FINAL CTA
const FinalCTA = styled.div`
  background: ${colors.gradient4};
  border-radius: 32px;
  padding: 6rem 2rem;
  text-align: center;
  margin: 6rem auto 4rem auto;
  max-width: 1000px;
`;

const FinalCTATitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${colors.dark};
`;

const FinalCTAText = styled.p`
  font-size: 1.15rem;
  margin-bottom: 3rem;
  opacity: 0.84;
  color: ${colors.dark};
  max-width: 600px;
  margin: 0 auto 3rem auto;
`;

const FinalCTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const DarkButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: ${colors.dark};
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(15,23,42,0.3);
  }
`;

const OutlinedButton = styled(DarkButton)`
  background: transparent;
  border: 2px solid ${colors.dark};
  color: ${colors.dark};
`;

// DATA
const services = [
  {
    icon: <FaUsers />,
    title: 'Elite Talent Acquisition',
    description: 'Access pre-screened, top-tier professionals ready to transform your business from day one.',
    benefits: [
      'AI-powered skill matching',
      'Cultural fit assessment',
      '99% retention rate',
      'Instant deployment ready',
    ],
    gradient: colors.gradient1,
  },
  {
    icon: <FaRocket />,
    title: 'Full-Stack Solutions',
    description: 'End-to-end project delivery with our certified teams of industry experts.',
    benefits: [
      'Agile methodology',
      'Real-time collaboration',
      'Quality guaranteed',
      '24/7 support included',
    ],
    gradient: colors.gradient2,
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation Consulting',
    description: 'Strategic guidance to revolutionize your business with cutting-edge technology.',
    benefits: [
      'Future-proof strategies',
      'Market intelligence',
      'ROI optimization',
      'Competitive advantage',
    ],
    gradient: colors.gradient3,
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: <FaRocket /> },
  { value: '99%', label: 'Client Satisfaction', icon: <FaStar /> },
  { value: '150+', label: 'Enterprise Clients', icon: <FaBuilding /> },
  { value: '24/7', label: 'Premium Support', icon: <FaShieldAlt /> },
];

const process = [
  {
    title: 'Initial Consultation',
    description: 'In-depth discovery call to understand your vision, goals, and technical requirements',
  },
  {
    title: 'Requirements Analysis',
    description: 'Detailed assessment of your needs, market analysis, and technology stack evaluation',
  },
  {
    title: 'Strategic Planning',
    description: 'Custom solution architecture, resource allocation, and milestone planning',
  },
  {
    title: 'Team Assembly',
    description: 'Handpicking expert developers, designers, and specialists for your project',
  },
  {
    title: 'Agile Development',
    description: 'Iterative development with regular sprints and continuous feedback integration',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing, security audits, and performance optimization',
  },
  {
    title: 'Deployment & Launch',
    description: 'Smooth deployment process with zero-downtime and comprehensive documentation',
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated maintenance, 24/7 support, and continuous improvement cycles',
  },
];

const testimonials = [
  {
    text: 'Credora transformed our entire development pipeline. Their elite team delivered solutions that exceeded every expectation. Simply incredible.',
    name: 'David Chen',
    role: 'CTO, TechFlow Inc.',
    company: 'Fortune 500'
  },
  {
    text: 'The level of expertise and professionalism is unmatched. They delivered our complex AI project 2 weeks ahead of schedule.',
    name: 'Sarah Rodriguez',
    role: 'VP Engineering, DataVision',
    company: 'Series B Startup'
  }
];

// MAIN COMPONENT
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // for any additional global JS side effects if needed
  }, []);

  const handleCTAClick = (path) => navigate(path);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* HERO SECTION */}
        <HeroSection>
          <VideoBackground autoPlay loop muted playsInline>
            <source src="/bidieo/credoramain.mp4" type="video/mp4" />
          </VideoBackground>
          <VideoOverlay />
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Premium Solutions.<br />Extraordinary Results.
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Partner with industry leaders for cutting-edge technology solutions, elite talent acquisition, and transformational business growth.
            </HeroSubtitle>
            <CTAContainer>
              <CTAButton
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('/contact')}
              >
                <FaHandshake /> Start Your Transformation <FaArrowRight />
              </CTAButton>
              <CTAButton
                secondary
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('/portfolio')}
              >
                <FaPlay /> Watch Success Stories
              </CTAButton>
            </CTAContainer>
            <TrustIndicators>
              <TrustItem>
                <FaCrown style={{ color: '#fbbf24' }} /> Fortune 500 Trusted
              </TrustItem>
              <TrustItem>
                <FaShieldAlt style={{ color: '#10b981' }} /> Enterprise Grade
              </TrustItem>
              <TrustItem>
                <FaFire style={{ color: '#f59e0b' }} /> Industry Leading
              </TrustItem>
            </TrustIndicators>
          </HeroContent>
        </HeroSection>

        {/* SERVICES */}
        <Section>
          <Container>
            <SectionTitle>Premium Services</SectionTitle>
            <ServicesGrid>
              {services.map((service, i) => (
                <ServiceCard
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CardGradient gradient={service.gradient} />
                  <IconContainer gradient={service.gradient}>{service.icon}</IconContainer>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <BenefitsList>
                    {service.benefits.map((b, idx) => (
                      <BenefitItem key={idx}>
                        <FaCheckCircle style={{ color: '#10b981', minWidth: '14px' }} /> {b}
                      </BenefitItem>
                    ))}
                  </BenefitsList>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Container>
        </Section>

        {/* STATS */}
        <Section>
          <Container>
            <StatsSection>
              <StatsGrid>
                {stats.map((stat, i) => (
                  <StatCard key={i}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fbbf24' }}>
                      {stat.icon}
                    </div>
                    <StatNumber>{stat.value}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </StatsGrid>
            </StatsSection>
          </Container>
        </Section>

        {/* PROCESS */}
        <Section>
          <Container>
            <ProcessSectionBox>
              <SectionTitle style={{ marginBottom: '4rem' }}>Our Process</SectionTitle>
              <ProcessGrid>
                {process.map((step, i) => (
                  <ProcessCard key={i}>
                    <ProcessNumber>{i + 1}</ProcessNumber>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </ProcessCard>
                ))}
              </ProcessGrid>
            </ProcessSectionBox>
          </Container>
        </Section>

        {/* TESTIMONIALS */}
        <TestimonialSection>
          <Container>
            <SectionTitle>Client Success Stories</SectionTitle>
            <TestimonialGrid>
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <TestimonialText>"{t.text}"</TestimonialText>
                  <ClientInfo>
                    <ClientAvatar />
                    <ClientDetails>
                      <ClientName>{t.name}</ClientName>
                      <ClientRole>{t.role}</ClientRole>
                    </ClientDetails>
                  </ClientInfo>
                </TestimonialCard>
              ))}
            </TestimonialGrid>
          </Container>
        </TestimonialSection>

        {/* INTERNSHIP CTA */}
        <Section>
          <Container>
            <ServiceCard style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <IconContainer style={{ margin: '0 auto 1.5rem auto' }}>
                <FaGraduationCap />
              </IconContainer>
              <CardTitle>Building Tomorrow's Workforce</CardTitle>
              <CardDescription>
                We also nurture emerging talent through our elite internship program, creating the skilled professionals your industry demands.
              </CardDescription>
              <CTAButton
                secondary
                style={{ margin: '1rem auto 0 auto' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('/internships')}
              >
                Explore Internship Program
              </CTAButton>
            </ServiceCard>
          </Container>
        </Section>

        {/* FINAL CTA */}
        <Section>
          <Container>
            <FinalCTA>
              <FinalCTATitle>Ready to Transform Your Business?</FinalCTATitle>
              <FinalCTAText>
                Join the elite companies who trust Credora for their most critical projects. Let's create something extraordinary together.
              </FinalCTAText>
              <FinalCTAButtons>
                <DarkButton
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCTAClick('/contact')}
                >
                  <FaHandshake /> Schedule Consultation
                </DarkButton>
                <OutlinedButton
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCTAClick('/case-studies')}
                >
                  <FaStar /> View Case Studies
                </OutlinedButton>
              </FinalCTAButtons>
            </FinalCTA>
          </Container>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;