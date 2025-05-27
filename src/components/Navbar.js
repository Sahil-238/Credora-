
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const colors = {
  primary: "#6366f1",
  navBg: "rgba(15, 23, 42, 0.97)",
  text: "#f8fafc",
  glassBg: "rgba(255,255,255,0.08)",
};

const Nav = styled.nav`
  background: ${colors.navBg};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1500;
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImg = styled.img`
  position: absolute;
  height: 250px;
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 600px) {
    height: 44px;
    position: relative;
    top: auto;
    transform: none;
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 2.1rem;
  cursor: pointer;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 900px) {
    position: fixed;
    left: 0; top: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.navBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    z-index: 1550;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100vw)")};
    transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.4rem;
  z-index: 1600;
  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 50px;
    margin-bottom: 2rem;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.19rem;
  padding: 0.8rem 2.5rem;
  border-radius: 10px;
  transition: all 0.16s;
  ${({ $active }) =>
    $active
      ? `
      color: ${colors.primary};
      background: ${colors.glassBg};
      font-weight: 700;
    `
      : ""}
  &:hover {
    color: ${colors.primary};
    background: ${colors.glassBg};
  }
  @media (max-width: 900px) {
    font-size: 1.4rem;
    justify-content: center;
    width: 100vw;
    text-align: center;
    padding: 1.2rem 0;
    border-radius: 0;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    z-index: 1540;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15,23,42,0.78);
    backdrop-filter: blur(2.5px);
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isMenuOpen]);

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  const path = location.pathname;

  return (
    <Nav>
      <NavContainer>
        <LogoLink to="/">
          <LogoImg src="/images/logo.png" alt="Credora Logo" />
        </LogoLink>
        <Hamburger
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <NavLinks open={isMenuOpen}>
          {/* Show logo and close button in mobile menu */}
          <MobileLogo src="/images/logo.png" alt="Credora Logo" />
          <CloseButton onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </CloseButton>
          <NavItem>
            <NavLink to="/" $active={path === "/"} onClick={handleMobileLinkClick}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" $active={path === "/about"} onClick={handleMobileLinkClick}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/internships" $active={path === "/internships"} onClick={handleMobileLinkClick}>
              Internships
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/verify-certificate" $active={path === "/verify-certificate"} onClick={handleMobileLinkClick}>
              Verify
            </NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
      <Overlay open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </Nav>
  );
};

export default Navbar;