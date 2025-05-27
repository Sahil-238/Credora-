import React from "react";
import styled, { css } from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

// DESIGN SYSTEM
const colors = {
  primary: "#6366f1",
  secondary: "#8b5cf6",
  background: "#1e293b",
  lightBg: "#0f172a",
  text: "#f8fafc",
  muted: "#94a3b8",
  border: "#334155",
  accent: "#f59e0b",
};

const fonts = {
  primary: "'Inter', sans-serif",
  heading: "'Poppins', sans-serif",
};

// STYLED COMPONENTS
const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 85%, #334155 100%);
  padding: 4rem 1.5rem 3rem 1.5rem;
  margin-top: 5rem;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow: hidden;
  border-top: 1.5px solid ${colors.border};
  color: ${colors.text};
  font-family: ${fonts.primary};
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2.5rem;
  padding-bottom: 2.8rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  padding: 1rem 0.5rem 0 0.5rem;
`;

const SectionTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 1.22rem;
  margin-bottom: 1.2rem;
  color: #fff;
  letter-spacing: 0.01em;
`;

const FooterText = styled.p`
  font-size: 0.96rem;
  color: ${colors.muted};
  margin-bottom: 0;
  line-height: 1.6;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 1.2rem;
`;

const iconHover = css`
  color: ${colors.muted};
  font-size: 1.45rem;
  transition: color 0.22s;
  &:hover {
    color: ${colors.primary};
  }
`;

const SocialLink = styled.a`
  ${iconHover}
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${colors.muted};
  text-decoration: none;
  font-size: 0.99rem;
  margin-bottom: 0.6rem;
  display: block;
  transition: color 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`;

const ContactInfo = styled.div`
  margin-top: 0.4rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
  color: ${colors.muted};
  font-size: 0.98rem;
`;

const ContactIcon = styled.span`
  font-size: 1.12rem;
`;

const Address = styled.p`
  font-size: 0.95rem;
  color: ${colors.muted};
  margin-top: 1.1rem;
  line-height: 1.5;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1.5px solid ${colors.border};
  color: ${colors.muted};
  font-size: 0.98rem;
`;

const LegalLinks = styled.div`
  margin-top: 0.7rem;
`;

const LegalLink = styled.a`
  color: ${colors.muted};
  text-decoration: none;
  margin: 0 0.7rem;
  transition: color 0.2s;
  &:hover {
    color: ${colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Credora</SectionTitle>
          <FooterText>
            Empowering students through industry-aligned internships and certifications.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/company/credora-space/ "
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/credora.space/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <LinkList>
            <li>
              <FooterLink href="/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink href="/internships">Internships</FooterLink>
            </li>
            <li>
              <FooterLink href="/verify-certificate">Verify Certificate</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact</FooterLink>
            </li>
          </LinkList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <span>info@credora.space</span>
            </ContactItem>
            <Address>
              Credora Inc.
              <br />
              Phone: +91 7588788403 <br />
              Wardha, 442001
            </Address>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Credora. All rights reserved.
        <LegalLinks>
          <LegalLink href="/privacy">Privacy Policy</LegalLink> |{" "}
          <LegalLink href="/terms">Terms of Service</LegalLink>
        </LegalLinks>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;