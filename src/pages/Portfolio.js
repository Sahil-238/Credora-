import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaReact,
  FaPython,
  FaJava,
  FaPenNib,
  FaMobileAlt,
} from "react-icons/fa";

// Dark Theme Design System
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  background: "#181D31",
  card: "#232946",
  text: "#f8fafc",
  lightText: "#A2A9C4",
  lightBackground: "#232946",
  border: "#282F44",
};

const fonts = {
  primary:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  heading: "'Poppins', sans-serif",
};

const spacing = {
  small: "8px",
  medium: "16px",
  large: "24px",
  xlarge: "48px",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.primary};
    background: ${colors.background};
    color: ${colors.text};
  }
`;

const Page = styled.div`
  min-height: 100vh;
  font-family: ${fonts.primary};
  color: ${colors.text};
  background: ${colors.background};
`;

const HeroSection = styled.header`
  background: linear-gradient(120deg, ${colors.primary} 80%, ${colors.secondary} 100%);
  padding: ${spacing.xlarge} ${spacing.medium};
  color: #fff;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 4px 16px rgba(99,102,241,0.21);
  text-align: center;
`;

const Avatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
  margin-bottom: ${spacing.medium};
  box-shadow: 0 6px 32px rgba(99,102,241,0.13);
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.small};
  letter-spacing: -1px;
  text-shadow: 0 2px 8px rgba(30,41,59,0.15);
`;

const HeroSubtitle = styled.p`
  font-size: 1.22rem;
  opacity: 0.94;
  margin-bottom: ${spacing.large};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.large};
  margin-bottom: ${spacing.xlarge};
  a {
    color: #fff;
    font-size: 2rem;
    transition: color 0.2s;
    &:hover {
      color: ${colors.accent};
    }
  }
`;

const Section = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.large};
  text-align: center;
  color: ${colors.text};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${spacing.large};
`;

const SkillCard = styled.div`
  background: ${colors.card};
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(99,102,241,0.09);
  padding: ${spacing.large};
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.small};
  border: 1.5px solid ${colors.border};
`;

const SkillIcon = styled.div`
  font-size: 2.1rem;
  color: ${colors.primary};
  margin-bottom: ${spacing.small};
`;

const SkillName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: ${spacing.large};
`;

const ProjectCard = styled.div`
  background: ${colors.card};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(99,102,241,0.13);
  padding: 2.1rem 1.4rem 1.7rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  position: relative;
  border: 1.5px solid ${colors.border};
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.small};
  color: ${colors.text};
`;

const ProjectDesc = styled.p`
  color: ${colors.lightText};
  font-size: 1.02rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${spacing.medium};
  margin-top: auto;
  a {
    color: ${colors.primary};
    font-size: 1.3rem;
    transition: color 0.16s;
    &:hover {
      color: ${colors.secondary};
    }
  }
`;

const Timeline = styled.ul`
  border-left: 3px solid ${colors.primary};
  padding-left: 24px;
  margin: 0 auto;
  max-width: 700px;
  list-style: none;
`;

const TimelineItem = styled.li`
  position: relative;
  margin-bottom: ${spacing.large};
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: "";
    position: absolute;
    left: -12px;
    top: 5px;
    width: 15px;
    height: 15px;
    background: ${colors.primary};
    border-radius: 50%;
    border: 2.5px solid ${colors.card};
    box-shadow: 0 4px 24px rgba(99,102,241,0.13);
  }
`;

const TimelineDate = styled.span`
  font-size: 0.98rem;
  color: ${colors.accent};
  font-weight: bold;
`;

const TimelineTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 3px;
`;

const TimelineDesc = styled.p`
  color: ${colors.lightText};
  font-size: 1rem;
  margin: 0;
`;

const Portfolio = () => {
  // --- DUMMY DATA (Replace with your own details) ---

  const profile = {
    avatar: "/images/avatar.jpg", // Place your image in public/images/avatar.jpg
    name: "Sahil Dhawale",
    role: "Full Stack Developer & Founder, Credora",
    bio: "Passionate about building impactful solutions using modern technology. Experienced in web, mobile, and backend development.",
    github: "https://github.com/Sahil-238",
    linkedin: "https://www.linkedin.com/in/sahildhawale/",
    website: "https://credora.space",
  };

  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaMobileAlt />, name: "Mobile Apps" },
    { icon: <FaPenNib />, name: "Content Writing" },
  ];

  const projects = [
    
    {
  title: "💼 Credora Solutions Platform",
  desc: "An enterprise-grade platform delivering premium B2B technology solutions, elite talent acquisition, and full-stack development for Fortune 500 clients. Includes smart dashboards, AI-powered matching, and real-time collaboration tools.",
  github: "https://github.com/Sahil-238/credora-platform",
  live: "https://credora.space"
}
,
    {
  title: "🏠 HomeRehab",
  desc: "A rehabilitation support platform for patients recovering at home, offering personalized exercise routines, progress tracking, and doctor-patient communication in one place.",
  github: "",
  live: "https://www.homerehab.in/"
},
    {
   title: "📘 Exam Ace App",
  desc: "A smart learning platform featuring student & teacher dashboards, AI chatbot, quizzes, internship updates, result analysis, and a leaderboard system for performance tracking.",
  github: "",
  live: "https://exam-ace.vercel.app/"
}
,
    {
    title: "🌟 The Career Zone",
    desc: "An exclusive WhatsApp community offering daily job updates, internship opportunities, career guidance, and mentorship for students. Join 1000+ students already growing their careers!",
    github: "",
    live: "https://whatsapp.com/channel/0029Vaj2zYI2kNFi3aA9Ur1y"
  }
];

  const timeline = [
    {
      date: "2024 - Present",
      title: "Founder & Full Stack Developer",
      desc: "Credora - Leading the development and growth of a fast-growing internship platform.",
    },
    {
      date: "2022 - 2024",
      title: "Software Engineer",
      desc: "Built scalable web and mobile solutions for startups and enterprises.",
    },
    {
      date: "2020 - 2022",
      title: "Freelance Developer",
      desc: "Delivered multiple full-stack projects for clients globally.",
    },
  ];

  // --- END DUMMY DATA ---

  return (
    <>
      <GlobalStyle />
      <Page>
        <HeroSection>
          <Avatar src={profile.avatar} alt={profile.name} />
          <HeroTitle>{profile.name}</HeroTitle>
          <HeroSubtitle>{profile.role}</HeroSubtitle>
          <HeroSubtitle>{profile.bio}</HeroSubtitle>
          <SocialLinks>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={profile.website} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </SocialLinks>
        </HeroSection>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, idx) => (
              <SkillCard key={idx}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, idx) => (
              <ProjectCard key={idx}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
                <ProjectLinks>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Site"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </ProjectLinks>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Timeline>
            {timeline.map((item, idx) => (
              <TimelineItem key={idx}>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDesc>{item.desc}</TimelineDesc>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>
      </Page>
    </>
  );
};

export default Portfolio;