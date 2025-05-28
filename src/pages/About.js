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
  padding: 7rem 1.5rem 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1rem 2rem;
  }
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
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #fff;
  font-family: 'Poppins', 'Inter', sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const CardText = styled.p`
  color: #cbd5e1;
  font-size: clamp(0.95rem, 2vw, 1rem);
  margin-bottom: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
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

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-5px) scale(1.02);
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: clamp(2.2rem, 4vw, 2.7rem);
  color: ${colors.secondary};
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
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
    box-shadow: 0 8px 32px rgba(139,92,246,0.13);
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
  avatar: "/images/team/sahil.jpg",
},

 {
  name: "Nayan Raut",
  position: "Co-Founder",
  bio: "Co-founder of Credora, driving innovation in AI-powered hiring and enterprise tech solutions with a focus on scalable impact.",
  avatar: "/images/team/nayan.png",
},
  {
  name: "Aniket Kumare",
  position: "HR",
  bio: "HR professional focused on talent acquisition, employee engagement, and building strong industry partnerships to drive team success.",
  avatar: "/images/team/aniket.jpg",
},
{
  name: "Devendra Ambalkar",
  position: "SDE",
  bio: "Skilled Software Developer with expertise in full-stack development, delivering robust and scalable web solutions with a focus on performance and user experience.",
  avatar: "/images/team/devendra.jpg",
},
{
  name: "Vaibhav Pawar",
  position: "SDE",
  bio: "Passionate Software Engineer focused on building efficient, user-centric applications using modern web technologies and clean architecture.",
  avatar: "/images/team/vaibhav.jpg",
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