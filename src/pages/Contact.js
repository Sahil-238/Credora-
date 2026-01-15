import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Dark Theme Design System
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  accent: "#f59e0b",
  background: "#181D31",
  card: "#232946",
  text: "#ffffff",
  lightText: "#A2A9C4",
  lightBackground: "#232946",
  border: "#282F44",
  error: "#dc2626",
  success: "#22c55e",
};

const fonts = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  heading: "'Poppins', sans-serif"
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

// Styled Components
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

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-family: ${fonts.heading};
  margin-bottom: ${spacing.medium};
  letter-spacing: -1px;
  text-shadow: 0 2px 8px rgba(30,41,59,0.25);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.94;
`;

const Section = styled.section`
  padding: ${spacing.xlarge} ${spacing.medium};
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.heading};
  text-align: center;
  margin-bottom: ${spacing.large};
  color: ${colors.text};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xlarge};
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: ${colors.card};
  border-radius: 18px;
  box-shadow: 0 4px 22px rgba(99,102,241,0.12);
  padding: 2.2rem 1.5rem;
  margin-bottom: ${spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
  justify-content: center;
  align-items: flex-start;
  border: 1.5px solid ${colors.border};
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.medium};
  font-size: 1.09rem;
  color: ${colors.text};
  margin-bottom: ${spacing.small};
  svg {
    color: ${colors.primary}; 
    font-size: 1.5rem;
  }
  a {
    color: ${colors.text};
    text-decoration: none;
    font-weight: 500;
    word-break: break-all;
  }
  span {
    color: ${colors.text};
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  min-height: 220px;
  border: none;
  border-radius: 14px;
  margin-top: ${spacing.medium};
  box-shadow: 0 2px 8px rgba(99,102,241,0.13);
  background: ${colors.card};
`;

const FormCard = styled.div`
  background: ${colors.card};
  border-radius: 18px;
  box-shadow: 0 4px 22px rgba(99,102,241,0.12);
  padding: 2.2rem 1.5rem;
  border: 1.5px solid ${colors.border};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium};
`;

const Input = styled.input`
  padding: ${spacing.medium};
  border: 1.5px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${colors.text};
  background: ${colors.background};
  transition: border-color 0.2s;
  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
  &::placeholder {
    color: ${colors.lightText};
    opacity: 1;
  }
`;

const Textarea = styled.textarea`
  padding: ${spacing.medium};
  border: 1.5px solid ${colors.border};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  color: ${colors.text};
  background: ${colors.background};
  resize: vertical;
  transition: border-color 0.2s;
  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
  &::placeholder {
    color: ${colors.lightText};
    opacity: 1;
  }
`;

const Button = styled.button`
  padding: ${spacing.medium} ${spacing.large};
  background: linear-gradient(110deg, ${colors.secondary} 70%, ${colors.primary} 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, transform 0.13s;
  box-shadow: 0 2px 8px rgba(99,102,241,0.13);
  &:hover {
    background: linear-gradient(110deg, ${colors.primary} 70%, ${colors.secondary} 100%);
    transform: translateY(-2px) scale(1.01);
  }
`;

const ErrorText = styled.p`
  color: ${colors.error};
  font-size: 1rem;
`;

const SuccessText = styled.p`
  color: ${colors.success};
  font-size: 1rem;
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all the fields.");
      setIsLoading(false);
      return;
    }
    // You can hook this to an API, EmailJS, Formspree, etc.
    // For demo, just show a success message after delay
    setTimeout(() => {
      setIsLoading(false);
      setSuccess("Thank you for reaching out! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <HeroSection>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
          Get in touch with Credora for project inquiries, partnerships, or technical support.
          </HeroSubtitle>
        </HeroSection>
        <Section>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactGrid>
            {/* Contact Info & Map */}
            <div>
              <InfoCard>
                <InfoRow>
                  <FaEnvelope />
                  <a href="mailto:hr@credora.space">hr@credora.space</a>
                </InfoRow>
                <InfoRow>
                  <FaEnvelope />
                  <a href="mailto:aniket@credora.space">aniket@credora.space</a>
                </InfoRow>
                <InfoRow>
                  <FaPhoneAlt />
                  <a href="tel:+917028885568">+91 70288 85568</a>
                </InfoRow>
                <InfoRow>
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/company/credora-space"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </InfoRow>
                <InfoRow>
                  <FaWhatsapp />
                  <a
                    href="https://chat.whatsapp.com/CSAG3Ev8PdE3yXMlqL14wb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Group
                  </a>
                </InfoRow>
                <InfoRow>
                  <FaMapMarkerAlt />
                  <span>Wardha, Maharashtra, India</span>
                </InfoRow>
              </InfoCard>
              <MapFrame
                title="Credora Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.585%2C20.735%2C78.595%2C20.745&amp;layer=mapnik"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <FormCard>
              <Form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleInput}
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                {error && <ErrorText>{error}</ErrorText>}
                {success && <SuccessText>{success}</SuccessText>}
              </Form>
            </FormCard>
          </ContactGrid>
        </Section>
      </Page>
    </>
  );
};

export default Contact;