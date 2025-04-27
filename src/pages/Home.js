// src/pages/Home.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

import { 
  FaSearch, 
  FaCertificate, 
  FaUserGraduate, 
  FaRocket,
  FaCode, 
  FaChartLine, 
  FaPaintBrush, 
  FaFlask, 
  FaClock, 
  FaMapMarker 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Design System Constants
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

// Style Definitions
const pageStyle = {
  fontFamily: fonts.primary,
  color: colors.text,
  lineHeight: 1.6
};

const heroSection = {
  position: 'relative',
  minHeight: '400px',
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
  filter: 'brightness(0.7)'
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
  textAlign: 'left',
  width: '100%'
};
const heroTitle = {
    fontSize: '3rem',
    fontFamily: fonts.heading,
    marginBottom: spacing.medium,
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    textAlign: 'center', // Added this line
    width: '100%' // Ensures proper centering
  };
const heroSubtitle = {
  fontSize: '1.5rem',
  marginBottom: spacing.xlarge,
  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
};

const searchContainer = {
    display: 'flex',
    gap: spacing.medium,
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%' // Added for better responsiveness
  };
const searchInput = {
  flex: 1,
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem'
};

const primaryButton = {
  padding: `${spacing.small} ${spacing.medium}`,
  backgroundColor: colors.secondary,
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // centers content inside the button
  gap: spacing.small,
  transition: 'transform 0.2s',
  margin: '0 auto', // centers the button itself in a block-level container
  textDecoration: 'none'
};


const buttonIcon = {
  fontSize: '1.2rem'
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

const featuresGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.large
};

const featureCard = {
  padding: spacing.large,
  borderRadius: '12px',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center'
};

const iconContainer = {
  fontSize: '2.5rem',
  color: colors.primary,
  marginBottom: spacing.medium
};

const iconStyle = {
  verticalAlign: 'middle'
};

const cardTitle = {
  fontSize: '1.25rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const cardText = {
  color: colors.lightText,
  fontSize: '0.95rem'
};

const testimonialGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: spacing.large
};

const testimonialCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const testimonialText = {
  fontSize: '1rem',
  marginBottom: spacing.medium,
  lineHeight: 1.5
};

const studentInfo = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing.medium
};

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover'
};

const studentName = {
  fontWeight: '600',
  marginBottom: spacing.small
};

const studentDetail = {
  color: colors.lightText,
  fontSize: '0.9rem'
};

const footerStyle = {
  backgroundColor: colors.primary,
  color: 'white',
  padding: spacing.xlarge,
  marginTop: spacing.xlarge
};

const footerContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center'
};

const footerHeading = {
  fontSize: '1.25rem',
  marginBottom: spacing.large
};

const footerGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: spacing.large,
  maxWidth: '600px',
  margin: '0 auto'
};

const footerText = {
  fontSize: '0.9rem',
  marginBottom: spacing.small,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline'
  }
};

// Data Arrays
const features = [
  {
    icon: <FaRocket style={iconStyle} />,
    title: 'Curated Opportunities',
    text: 'Hand-picked internships matching your skills and career goals'
  },
  {
    icon: <FaCertificate style={iconStyle} />,
    title: 'Verified Certificates',
    text: 'Receive industry-recognized certificates upon completion'
  },
  {
    icon: <FaUserGraduate style={iconStyle} />,
    title: 'Student-Centric',
    text: 'Designed specifically for undergraduate requirements'
  }
];

const testimonials = [
  {
    text: 'Credora helped me land my dream internship at a Fortune 500 company!',
    name: 'Sarah Johnson',
    college: 'Stanford University',
    avatar: 'https://via.placeholder.com/50'
  },
];

// Media Queries
const mediaQuery = '@media (max-width: 768px)';

const responsiveStyles = {
  heroSection: {
    [mediaQuery]: {
      minHeight: '500px'
    }
  },
  heroTitle: {
    [mediaQuery]: {
      fontSize: '2rem'
    }
  },
  heroSubtitle: {
    [mediaQuery]: {
      fontSize: '1.1rem'
    }
  },
  heroContent: {
    [mediaQuery]: {
      padding: spacing.large,
      textAlign: 'center'
    }
  }
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
};

const sliderImages = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png"
];

const sliderContainer = {
  maxWidth: "100%", 
  textAlign: "center", 
  padding: "20px"
};


const sliderImage = {
  width: "150px", // Adjust as needed
  height: "auto", // Maintain aspect ratio
  objectFit: "contain",
  display: "block",
  margin: "0 auto"
};
// Test
// New Style Definitions
const domainsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: spacing.large
};

const domainCard = {
  padding: spacing.large,
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const domainIcon = {
  fontSize: '2.5rem',
  color: colors.primary,
  marginBottom: spacing.medium
};

const statsContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: spacing.xlarge,
  flexWrap: 'wrap'
};

const statItem = {
  textAlign: 'center'
};

const statValue = {
  fontSize: '2.5rem',
  fontFamily: fonts.heading,
  marginBottom: spacing.small
};

const statLabel = {
  fontSize: '1.1rem'
};

const stepsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: spacing.xlarge
};

const stepCard = {
  textAlign: 'center',
  padding: spacing.large
};

const stepNumber = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: colors.primary,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  fontSize: '1.5rem',
  marginBottom: spacing.medium
};

const opportunitiesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.large
};

const opportunityCard = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const opportunityMeta = {
  display: 'flex',
  gap: spacing.medium,
  margin: `${spacing.medium} 0`
};

const metaItem = {
  display: 'flex',
  alignItems: 'center',
  gap: spacing.small,
  color: colors.lightText
};

const partnersGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: spacing.xlarge,
  alignItems: 'center'
};

const partnerLogo = {
  height: '40px',
  width: 'auto',
  opacity: 0.7,
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 1
  }
};

const ctaText = {
  fontSize: '1.2rem',
  marginBottom: spacing.xlarge,
  maxWidth: '600px',
  margin: '0 auto'
};

const ctaButtonGroup = {
  display: 'flex',
  gap: spacing.medium,
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const secondaryButton = {
  ...primaryButton,
  width: 'auto', // Prevent full-width
  backgroundColor: colors.secondary,
  border: `2px solid `,
  color: 'white'
};


// Add to style definitions
const faqGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: spacing.medium,
  maxWidth: '1000px',
  margin: '0 auto'
};

const faqItemStyle = {
  padding: spacing.large,
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'left'
};

const questionStyle = {
  color: colors.primary,
  fontFamily: fonts.heading,
  marginBottom: spacing.small,
  fontSize: '1.1rem'
};

const answerStyle = {
  color: colors.lightText,
  lineHeight: 1.6
};
// Test
// Data Arrays
const domains = [
  { icon: <FaCode />, title: 'Tech & Development', internships: 35 },
  { icon: <FaChartLine />, title: 'Business & Marketing', internships: 89 },
  { icon: <FaPaintBrush />, title: 'Design & Creative', internships: 52 },
  { icon: <FaFlask />, title: 'Research & Science', internships: 98 }
];

const stats = [
  { value: 5000, label: 'Internships Offered' },
  { value: 92, label: 'Success Rate (%)' },
  { value: 35, label: 'Partner Companies' }
];

const steps = [
  {
    title: 'Create Profile',
    description: 'Register and complete your student profile'
  },
  {
    title: 'Find Opportunities',
    description: 'Browse curated internships matching your skills'
  },
  {
    title: 'Apply & Get Selected',
    description: 'Submit applications and get selected'
  },
  {
    title: 'Complete & Certify',
    description: 'Finish internship and get certified'
  }
];

const opportunities = [
  {
    title: 'Frontend Developer Intern',
    duration: '3 Months',
    location: 'Remote',
    description: 'Work with modern JavaScript frameworks and build real-world applications'
  },
  {
    title: 'Marketing Strategist',
    duration: '2 Months',
    location: 'Hybrid',
    description: 'Develop and execute digital marketing campaigns'
  }
];

const partners = [
  { name: 'Google', logo: '/logos/google.png' },
  { name: 'Microsoft', logo: '/logos/microsoft.png' },
  { name: 'Amazon', logo: '/logos/amazon.png' }
];
// Add to data arrays
const faqs = [
  {
    question: "What's the typical internship duration?",
    answer: "We offer flexible durations from 1-6 months to fit academic schedules"
  },
  {
    question: "Are the certificates recognized?",
    answer: "All certificates are industry-verified and include verifiable digital credentials"
  },
  {
    question: "Can I work on real projects?",
    answer: "Yes! All internships involve hands-on projects with actual company datasets"
  },
  {
    question: "Is there mentorship support?",
    answer: "Dedicated mentors provide weekly guidance and career advice"
  },
  {
    question: "Who's eligible to apply?",
    answer: "Open to all undergraduate students regardless of year of study"
  },
  {
    question: "How will my performance be evaluated?",
    answer: "Your performance is assessed based on task completion, skill development, and feedback from mentors."
  }
];

// Apply responsive styles
Object.assign(heroSection, responsiveStyles.heroSection);
Object.assign(heroTitle, responsiveStyles.heroTitle);
Object.assign(heroSubtitle, responsiveStyles.heroSubtitle);
Object.assign(heroContent, responsiveStyles.heroContent);

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <header style={heroSection}>
        <div style={imageWrapper}>
          <img 
            src="/images/hero-image.jpg" 
            alt="Students collaborating"
            style={headerImage}
          />
        </div>
        <div style={textOverlay}>
          <div style={heroContent}>
            <h1 style={heroTitle}>Launch Your Career with Credora</h1>
            <p style={heroSubtitle}>Bridge the gap between education and industry with curated internships & recognized certifications</p>
            <button 
            style={primaryButton}
            onClick={() => navigate('/internships')}
          >
            Learn More
          </button>
            {/* <div style={searchContainer}>
              <input 
                type="text" 
                placeholder="Search internships by domain or skill..." 
                style={searchInput}
              />
              <button style={primaryButton}>
                <FaSearch style={buttonIcon} /> Find Opportunities
              </button>
            </div> */}

          </div>
        </div>
      </header>

      {/* Features Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Why Choose Credora?</h2>
        <div style={featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={featureCard}>
              <div style={iconContainer}>{feature.icon}</div>
              <h3 style={cardTitle}>{feature.title}</h3>
              <p style={cardText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Image Slider */}

      <section style={sliderContainer}>
        <h2 style={sectionTitle}>Products and Partners</h2>
  <Slider {...sliderSettings}>
    {sliderImages.map((img, index) => (
      <div key={index}>
        <img src={img} alt={`Slide ${index + 1}`} style={sliderImage} />
      </div>
    ))}
  </Slider>
</section>
    {/* Test */}

{/* Popular Domains Section */}
<section style={sectionStyle}>
  <h2 style={sectionTitle}>Explore Popular Domains</h2>
  <div style={domainsGrid}>
    {domains.map((domain, index) => (
      <div key={index} style={domainCard}>
        <div style={domainIcon}>{domain.icon}</div>
        <h3 style={cardTitle}>{domain.title}</h3>
        <p style={cardText}>{domain.internships}+ Opportunities</p>
      </div>
    ))}
  </div>
</section>

{/* Statistics Section */}
<section style={{...sectionStyle, backgroundColor: colors.primary, color: 'white'}}>
  <div style={statsContainer}>
    {stats.map((stat, index) => (
      <div key={index} style={statItem}>
        <div style={statValue}>{stat.value}+</div>
        <div style={statLabel}>{stat.label}</div>
      </div>
    ))}
  </div>
</section>

{/* How It Works Section */}
<section style={sectionStyle}>
  <h2 style={sectionTitle}>How It Works</h2>
  <div style={stepsContainer}>
    {steps.map((step, index) => (
      <div key={index} style={stepCard}>
        <div style={stepNumber}>{index + 1}</div>
        <h3 style={cardTitle}>{step.title}</h3>
        <p style={cardText}>{step.description}</p>
      </div>
    ))}
  </div>
</section>

{/* Current Opportunities Section */}
<section style={{...sectionStyle, backgroundColor: colors.lightBackground}}>
  <h2 style={sectionTitle}>Featured Internships</h2>
  <div style={opportunitiesGrid}>
    {opportunities.map((opp, index) => (
      <div key={index} style={opportunityCard}>
        <h3 style={cardTitle}>{opp.title}</h3>
        <div style={opportunityMeta}>
          <span style={metaItem}><FaClock /> {opp.duration}</span>
          <span style={metaItem}><FaMapMarker /> {opp.location}</span>
        </div>
        <p style={cardText}>{opp.description}</p>
        {/* <button style={secondaryButton}>Apply Now</button> */}
        <button 
          style={secondaryButton} 
          onClick={() => navigate('/internships')}
          >
            Apply Now
          </button>
        {/* <Link to="/internships" style={secondaryButton}>Apply Now</Link> */}
        {/* <a 
                // href={internship.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={secondaryButton}
              >
                Apply Now
              </a> */}
      </div>
    ))}
  </div>
</section>

{/* Partners Section
<section style={sectionStyle}>
  <h2 style={sectionTitle}>Trusted By Leading Companies</h2>
  <div style={partnersGrid}>
    {partners.map((partner, index) => (
      <img 
        key={index} 
        src={partner.logo} 
        alt={partner.name} 
        style={partnerLogo} 
      />
    ))}
  </div>
</section> */}
<section style={sectionStyle}>
  <h2 style={sectionTitle}>Frequently Asked Questions</h2>
  <div style={faqGrid}>
    {faqs.map((faq, index) => (
      <div key={index} style={faqItemStyle}>
        <h3 style={questionStyle}>{faq.question}</h3>
        <p style={answerStyle}>{faq.answer}</p>
      </div>
    ))}
  </div>
</section>
{/* CTA Section */}
<section style={{...sectionStyle, textAlign: 'center'}}>
  <h2 style={sectionTitle}>Ready to Launch Your Career?</h2>
  <p style={ctaText}>Join thousands of students who've transformed their careers through Credora</p>
  <br />
  <div style={ctaButtonGroup}>
    <Link to="/internships" style={primaryButton}>Browse Internships</Link>
    {/* <Link to="/signup" style={secondaryButton}>Create Account</Link> */}
  </div>
</section>
    {/* Test */}
    </div>
  );
};

export default Home;