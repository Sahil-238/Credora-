// // src/pages/About.js
// import React from 'react';
// import { FaUniversity, FaHandsHelping, FaAward, FaUsers } from 'react-icons/fa';
// import Footer from '../components/Footer';

// // Design System
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

// // Styles
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
//   filter: 'brightness(0.7)',
//   animation: 'zoomOut 10s ease-in-out infinite'
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

// const sectionTitle = {
//   fontSize: '2rem',
//   fontFamily: fonts.heading,
//   textAlign: 'center',
//   marginBottom: spacing.xlarge
// };

// const missionText = {
//   fontSize: '1rem',
//   lineHeight: '1.6'
// };

// const missionContent = {
//   display: 'grid',
//   gap: spacing.xlarge,
//   gridTemplateColumns: '1fr 1fr',
//   alignItems: 'center'
// };

// const cardText = {
//   color: colors.lightText,
//   fontSize: '0.95rem'
// };

// const statsGrid = {
//   display: 'grid',
//   gap: spacing.large,
//   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
// };

// const statCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'center'
// };

// const iconStyle = {
//   verticalAlign: 'middle',
//   fontSize: '2rem'
// };

// const cardTitle = {
//   fontSize: '1.25rem',
//   fontFamily: fonts.heading,
//   marginBottom: spacing.small
// };

// const valuesGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//   gap: spacing.large
// };

// const valueCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   textAlign: 'center'
// };

// const iconContainer = {
//   fontSize: '2.5rem',
//   color: colors.primary,
//   marginBottom: spacing.medium
// };

// const teamGrid = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//   gap: spacing.large
// };

// const teamCard = {
//   padding: spacing.large,
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   textAlign: 'center'
// };

// const avatarStyle = {
//   width: '100px',
//   height: '100px',
//   borderRadius: '50%',
//   objectFit: 'cover',
//   margin: '0 auto',
//   marginBottom: spacing.medium
// };

// const studentName = {
//   fontWeight: 'bold',
//   fontSize: '1.1rem'
// };

// const studentDetail = {
//   fontSize: '0.9rem',
//   color: colors.lightText
// };

// const footerStyle = {
//   backgroundColor: colors.primary,
//   color: 'white',
//   padding: '20px',
//   textAlign: 'center',
//   marginTop: '40px'
// };

// const footerContent = {
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// const footerHeading = {
//   fontSize: '1.5rem',
//   marginBottom: '10px'
// };

// const footerGrid = {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '40px'
// };

// const footerText = {
//   margin: '5px 0'
// };

// // Data Arrays
// const values = [
//   {
//     icon: <FaHandsHelping style={iconStyle} />,
//     title: 'Student First Approach',
//     description: 'Everything we do is focused on student success and growth'
//   },
//   {
//     icon: <FaUsers style={iconStyle} />,
//     title: 'Industry Collaboration',
//     description: 'Strong partnerships with leading organizations'
//   },
//   {
//     icon: <FaAward style={iconStyle} />,
//     title: 'Quality Assurance',
//     description: 'Rigorous standards for all our programs'
//   }
// ];

// const teamMembers = [
//   {
//     name: 'Anika Patel',
//     position: 'CEO & Founder',
//     bio: 'Education technology expert with 15+ years experience',
//     avatar: 'https://via.placeholder.com/100'
//   },
//   {
//     name: 'Rajesh Kumar',
//     position: 'CTO',
//     bio: 'Tech leader focused on scalable learning solutions',
//     avatar: 'https://via.placeholder.com/100'
//   }
// ];


// const globalStyles = `
//   @keyframes zoomOut {
//     0% {
//       transform: scale(1.2);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
// `;

// const About = () => (
//   <div style={pageStyle}>
//         <style>{globalStyles}</style>

//     {/* Hero Section */}
//     <header style={heroSection}>
//     <div style={imageWrapper}>
//         <img 
//           src="/images/about-hero.jpg" // Replace with your image path
//           alt="Students collaborating"
//           style={headerImage}
//         />
//       </div>
//       <div style={textOverlay}>
//         <div style={heroContent}>
//           <h1 style={heroTitle}>Empowering Student Success</h1>
//           <p style={heroSubtitle}>Bridging academia and industry through meaningful experiences</p>
//         </div>
//         </div>
//     </header>

//     {/* Mission Section */}
//     <section style={sectionStyle}>
//       <h2 style={sectionTitle}>Our Mission</h2>
//       <div style={missionContent}>
//         <div style={missionText}>
//           <p style={cardText}>
//             Credora is dedicated to providing students with valuable experiences and verifiable 
//             certificates to enhance their academic profiles and career prospects. We partner with 
//             industry leaders to create authentic learning opportunities.
//           </p>
//         </div>
//         <div style={statsGrid}>
//           <div style={statCard}>
//             <FaUniversity style={iconStyle} />
//             <h3 style={cardTitle}>500+ Colleges</h3>
//             <p style={cardText}>Partner institutions nationwide</p>
//           </div>
//           <div style={statCard}>
//             <FaAward style={iconStyle} />
//             <h3 style={cardTitle}>10K+ Certificates</h3>
//             <p style={cardText}>Issued to deserving students</p>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* Values Section */}
//     <section style={{ ...sectionStyle, backgroundColor: colors.lightBackground }}>
//       <h2 style={sectionTitle}>Our Values</h2>
//       <div style={valuesGrid}>
//         {values.map((value, index) => (
//           <div key={index} style={valueCard}>
//             <div style={iconContainer}>{value.icon}</div>
//             <h3 style={cardTitle}>{value.title}</h3>
//             <p style={cardText}>{value.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>

//     {/* Team Section */}
//     <section style={sectionStyle}>
//       <h2 style={sectionTitle}>Leadership Team</h2>
//       <div style={teamGrid}>
//         {teamMembers.map((member, index) => (
//           <div key={index} style={teamCard}>
//             {/* <img src={member.avatar} alt={member.name} style={avatarStyle} /> */}
//             <h3 style={studentName}>{member.name}</h3>
//             <p style={studentDetail}>{member.position}</p>
//             <p style={cardText}>{member.bio}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   </div>
// );

// export default About;


import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartLine,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import Footer from "../components/Footer";

// COLORS, FONTS, ETC
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  success: "#10b981",
  dark: "#0f172a",
  darkCard: "#1e293b",
  gradient1: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  gradient2: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  gradient3: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  gradient4: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  glassBg: "rgba(255,255,255,0.09)",
  glassBlur: "blur(20px)",
  gradientText: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Poppins:wght@600;700&display=swap');
  body {
    background: ${colors.dark};
    color: #fff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px);}
    50% { transform: translateY(-20px);}
  }
  @keyframes zoomHero {
    0% { transform: scale(1.1);}
    100% { transform: scale(1);}
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${colors.dark};
  color: white;
  overflow: hidden;
`;

// HERO SECTION
const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%);
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
  text-align: left;
  max-width: 950px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.2rem;
  background: ${colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  font-family: 'Poppins', 'Inter', sans-serif;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  margin-bottom: 2.5rem;
  opacity: 0.85;
  line-height: 1.5;
  max-width: 700px;
`;

const Section = styled.section`
  padding: 7rem 2rem 3rem 2rem;
  position: relative;
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: ${colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MissionGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const MissionText = styled(motion.div)`
  font-size: 1.08rem;
  line-height: 1.7;
  color: #e0e6ed;
`;

const StatsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const StatCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.18);
  text-align: center;
  box-shadow: 0 2px 18px rgba(30, 41, 59, 0.14);
`;

const StatIcon = styled.div`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  color: ${colors.primary};
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
  font-family: 'Poppins', 'Inter', sans-serif;
`;

const CardText = styled.p`
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255,255,255,0.14);
  text-align: center;
  box-shadow: 0 4px 18px rgba(30, 41, 59, 0.13);
  transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
  &:hover {
    transform: translateY(-10px) scale(1.04);
    border: 1.5px solid ${colors.primary};
    box-shadow: 0 8px 32px rgba(99,102,241,0.16);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.7rem;
  color: ${colors.secondary};
  margin-bottom: 1.2rem;
`;

const InternshipSection = styled.section`
  background: ${colors.gradient3};
  border-radius: 32px;
  padding: 5rem 2rem;
  margin: 5rem auto 3rem auto;
  max-width: 1050px;
  box-shadow: 0 2px 16px rgba(60, 194, 245, 0.10);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const TeamCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border-radius: 20px;
  padding: 2.5rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.11);
  text-align: center;
  box-shadow: 0 2px 18px rgba(30, 41, 59, 0.09);
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
  &:hover {
    transform: translateY(-5px) scale(1.02);
    border: 1.5px solid ${colors.secondary};
    box-shadow: 0 8px 32px rgba(139, 92, 246, 0.13);
  }
`;

const Avatar = styled.img`
  width: 90px; height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.2rem auto;
  display: block;
  border: 2.5px solid ${colors.primary};
`;

const MemberName = styled.div`
  font-weight: bold;
  font-size: 1.09rem;
  margin-bottom: 0.26rem;
  color: #fff;
`;

const MemberRole = styled.div`
  font-size: 0.97rem;
  color: #cbd5e1;
  margin-bottom: 0.6rem;
`;

const MemberBio = styled.p`
  font-size: 0.98rem;
  color: #b6c3dc;
`;

// DATA ARRAYS
const services = [
  {
    icon: <FaChartLine />,
    title: "Talent Analytics",
    description: "Leverage our advanced analytics to make data-driven hiring decisions.",
  },
  {
    icon: <FaHandshake />,
    title: "Corporate Partnerships",
    description: "Tailored solutions to meet your organization's talent acquisition needs.",
  },
  {
    icon: <FaAward />,
    title: "Skill Certification",
    description: "Industry-recognized certifications to validate candidate skills.",
  },
];

const teamMembers = [
 {
  name: "Sahil Dhawale",
  position: "Founder",
  bio: "Full Stack Developer and entrepreneur passionate about building scalable tech solutions and nurturing future talent through innovation.",
  avatar: "/images/sahil.jpg",
},

 {
  name: "Nayan Raut",
  position: "Co-Founder",
  bio: "Co-founder of Credora, driving innovation in AI-powered hiring and enterprise tech solutions with a focus on scalable impact.",
  avatar: ""
},
  {
  name: "Aniket Kumare",
  position: "HR",
  bio: "HR professional focused on talent acquisition, employee engagement, and building strong industry partnerships to drive team success.",
  avatar: ""
},
{
  name: "Devendra Ambalkar",
  position: "SDE",
  bio: "Skilled Software Developer with expertise in full-stack development, delivering robust and scalable web solutions with a focus on performance and user experience.",
  avatar: ""
},
{
  name: "Vaibhav Pawar",
  position: "SDE",
  bio: "Passionate Software Engineer focused on building efficient, user-centric applications using modern web technologies and clean architecture.",
  avatar: ""
}


];

// MOTION VARIANTS
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, type: "spring" },
  }),
};

const About = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      {/* HERO SECTION */}
      <HeroSection>
        <Blobs>
          <Blob gradient={colors.gradient2} size="300px" top="13%" right="13%" duration={8} />
          <Blob gradient={colors.gradient3} size="230px" bottom="17%" left="10%" duration={6} />
        </Blobs>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionizing Talent Acquisition
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2 }}
          >
            Empowering businesses with data-driven solutions and a premium talent pipeline.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* MISSION */}
      <Section>
        <Container>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Mission
          </SectionTitle>
          <MissionGrid>
            <MissionText
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <p>
                Credora is dedicated to transforming the corporate talent landscape. We provide cutting-edge analytics and tailored solutions to help businesses identify, acquire, and retain top-tier talent. Our commitment to excellence ensures that our partners stay ahead in the competitive market.
              </p>
            </MissionText>
            <StatsGrid>
              <StatCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
              >
                <StatIcon>
                  <FaHandshake />
                </StatIcon>
                <CardTitle>200+ Corporate Partners</CardTitle>
                <CardText>Trusted by industry leaders</CardText>
              </StatCard>
              <StatCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={fadeUp}
              >
                <StatIcon>
                  <FaChartLine />
                </StatIcon>
                <CardTitle>30% Improvement</CardTitle>
                <CardText>In hiring efficiency for our clients</CardText>
              </StatCard>
            </StatsGrid>
          </MissionGrid>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Premium Services
          </SectionTitle>
          <ServicesGrid>
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                whileHover={{ scale: 1.06, boxShadow: "0 16px 64px rgba(99,102,241,0.18)" }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* INTERNSHIP */}
      <InternshipSection>
        <Container>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Supporting the Talent Pipeline
          </SectionTitle>
          <MissionGrid>
            <MissionText
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <p>
                While our primary focus is on providing premium B2B services, we also maintain a robust internship program. This initiative serves as a valuable talent pipeline, allowing us to identify and nurture emerging talent for our corporate partners.
              </p>
            </MissionText>
            <StatsGrid>
              <StatCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
              >
                <StatIcon>
                  <FaGraduationCap />
                </StatIcon>
                <CardTitle>5000+ Interns Placed</CardTitle>
                <CardText>Bridging academia and industry</CardText>
              </StatCard>
            </StatsGrid>
          </MissionGrid>
        </Container>
      </InternshipSection>

      {/* TEAM SECTION */}
      <Section>
        <Container>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Leadership Team
          </SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, i) => (
              <TeamCard
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                whileHover={{ scale: 1.04, boxShadow: "0 16px 64px rgba(139,92,246,0.14)" }}
              >
                <Avatar src={member.avatar} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.position}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>

      {/* <Footer /> */}
    </Wrapper>
  </>
);

export default About;