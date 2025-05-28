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

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-position: center;
  }

  @media (max-width: 480px) {
    object-position: 50% 50%; // Centers the video content
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.9) 0%,
    rgba(30, 41, 59, 0.85) 50%,
    rgba(51, 65, 85, 0.8) 100%
  );
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.95) 0%,
      rgba(30, 41, 59, 0.9) 50%,
      rgba(51, 65, 85, 0.85) 100%
    );
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 60px); // Adjusts for mobile headers
    padding: 2rem 0;
  }
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

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    margin-top: -2rem; // Adjusts content position on mobile
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
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
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.4rem;
    
    svg {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }
`;

// SERVICES
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 1.75rem;
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

const CardGradient = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: ${({gradient}) => gradient};
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${({gradient}) => gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const CardDescription = styled.p`
  color: rgba(255,255,255,0.78);
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    svg {
      font-size: 0.9rem;
      min-width: 12px !important;
    }
  }
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

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 3rem auto;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    margin: 2rem auto;
    border-radius: 20px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.2);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

const StatNumber = styled.div`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #fbbf24;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fbbf24;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
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
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.glassBg};
  backdrop-filter: ${colors.glassBlur};
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.75rem;
    border-radius: 20px;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
  color: rgba(255,255,255,0.92);

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const ClientAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.gradient3};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.div`
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ClientRole = styled.div`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
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
  {
    title: 'Scaling & Innovation',
    description: 'Proactive enhancements and scaling to keep your business ahead',
  },
  {
    title: 'Partnership Review',
    description: 'Regular check-ins to align on goals and celebrate achievements',
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
                    <StatIcon>{stat.icon}</StatIcon>
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