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
  background: "#0f172a",
  dark: "#181D31",
  text: "#f8fafc",
  lightText: "#A2A9C4",
  lightBackground: "#232946",
  glassBg: "rgba(36,40,61,0.85)",
  glassBlur: "blur(20px)",
  gradient1: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", // Only blue/purple
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
  background: linear-gradient(135deg, #0f172a 0%, #181D31 60%, #232946 100%);
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
  opacity: 0.13;
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
  text-shadow: 0 2px 6px rgba(30,41,59,0.13);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  margin-bottom: 1.5rem;
  color: #e0e6ed;
  text-shadow: 0 2px 4px rgba(0,0,0,0.12);
  max-width: 700px;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6) blur(6px); // Added blur effect
  ${'' /* background: ${colors.gradient1}; */}
  position: absolute;
  opacity: 0.6;
  top: 0; 
  left: 0; 
  z-index: 0;
  transform: scale(1.1); // Prevents blur edges from showing

  @media (max-width: 768px) {
    filter: brightness(0.5) blur(6px); // Slightly less blur on mobile
  }

  @media (max-width: 480px) {
    filter: brightness(0.4) blur(4px); // Even less blur on smaller devices
  }
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
  background: white;
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
  border: 1px solid rgba(99,102,241,0.14);
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
  color: ${colors.text};
`;

const ProgramText = styled.p`
  color: ${colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.04rem;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.7rem 2.2rem;
  background: ${colors.gradient1};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.07rem;
  font-weight: 600;
  transition: transform 0.16s, box-shadow 0.17s;
  box-shadow: 0 2px 8px rgba(99,102,241,0.09);
  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: ${colors.primary};
    box-shadow: 0 4px 24px rgba(99,102,241,0.14);
  }
`;

// Application Form
const ApplicationSection = styled.section`
  padding: 4rem 1.7rem 3rem 1.7rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${colors.background};
  text-align: center;
  animation: fadeInUp 1.3s cubic-bezier(0.4,0,0.2,1);
  border-radius: 24px;
  margin-top: 2.5rem;
  border: 1px solid #232946;
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
  border: 1.3px solid #232946;
  font-size: 1rem;
  background: ${colors.lightBackground};
  color: ${colors.text};
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 420px;
  padding: 1rem;
  border-radius: 8px;
  border: 1.3px solid #232946;
  font-size: 1rem;
  background: ${colors.lightBackground};
  color: ${colors.text};
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
  background: ${colors.background};
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
  background: ${colors.lightBackground};
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
  color: ${colors.text};
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
  background: ${colors.lightBackground};
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
          <Blob gradient={colors.gradient1} size="230px" bottom="17%" left="10%" duration={6} />
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