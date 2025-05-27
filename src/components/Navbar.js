// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import styled, { createGlobalStyle } from "styled-components";
// import { FaBars, FaTimes } from "react-icons/fa";

// // Design System
// const colors = {
//   primary: "#6366f1",
//   secondary: "#8b5cf6",
//   accent: "#f59e0b",
//   background: "#0f172a",
//   navBg: "rgba(15, 23, 42, 0.96)",
//   text: "#f8fafc",
//   darkText: "#1e293b",
//   lightText: "#94a3b8",
//   border: "#334155",
//   glassBg: "rgba(255,255,255,0.08)",
// };
// const fonts = {
//   primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//   heading: "'Poppins', sans-serif",
// };

// const GlobalNavbarStyle = createGlobalStyle`
//   body {
//     font-family: ${fonts.primary};
//   }
// `;

// const Nav = styled.nav`
//   background: ${colors.navBg};
//   box-shadow: 0 2px 10px 0 rgba(30,41,59,0.17);
//   position: sticky;
//   top: 0;
//   width: 100%;
//   min-height: 72px;
//   z-index: 1500;
//   backdrop-filter: blur(9px);
//   transition: background 0.3s;
// `;

// const NavContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2.2rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   // min-height: 80px;
//   height: 72px;
// `;

// const LogoLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0.2rem 0;
//   color: ${colors.primary};
//   &:hover {
//     opacity: 0.92;
//   }
// `;

// const LogoImg = styled.img`
//    max-height: 150px;
//   width: auto;
//   object-fit: contain;
//   transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
//   @media (max-width: 900px) {
//     height: 100px;
//   }
//   @media (max-width: 600px) {
//     height: 42px;
//   }
//   &:hover {
//     transform: scale(1.07) rotate(-4deg);
//   }
// `;

// const Hamburger = styled.button`
//   background: none;
//   border: none;
//   color: ${colors.text};
//   font-size: 2.1rem;
//   cursor: pointer;
//   display: none;
//   z-index: 1600;
//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 2.1rem;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   transition: all 0.3s;

//   @media (max-width: 900px) {
//     position: fixed;
//     left: 0;
//     top: 0;
//     height: 100vh;
//     width: 100vw;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: ${colors.navBg};
//     gap: 2.5rem;
//     z-index: 1550;
//     transition: transform 0.42s cubic-bezier(0.4,0,0.2,1);
//     transform: ${({ open }) =>
//       open ? "translateX(0)" : "translateX(100vw)"};
//     box-shadow: 0 2px 18px 0 rgba(30,41,59,0.19);
//   }
// `;

// const NavItem = styled.li`
//   display: flex;
//   align-items: center;
// `;

// const activeLink = {
//   color: colors.primary,
//   background: colors.glassBg,
//   fontWeight: 700,
//   borderRadius: "12px"
// };

// const NavLink = styled(Link)`
//   color: ${colors.text};
//   text-decoration: none;
//   font-family: ${fonts.primary};
//   font-weight: 500;
//   font-size: 1.09rem;
//   padding: 0.52rem 1.1rem 0.52rem 1.1rem;
//   border-radius: 10px;
//   transition: all 0.16s;
//   letter-spacing: 0.01em;
//   ${({ $active }) =>
//     $active
//       ? `
//       color: ${activeLink.color};
//       background: ${activeLink.background};
//       font-weight: 700;
//       border-radius: 12px;
//     `
//       : ""}
//   &:hover {
//     color: ${colors.primary};
//     background: ${colors.glassBg};
//     transform: translateY(-1.5px) scale(1.03);
//   }
// `;

// const Overlay = styled.div`
//   display: none;
//   @media (max-width: 900px) {
//     display: ${({ open }) => (open ? "block" : "none")};
//     position: fixed;
//     z-index: 1540;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(15,23,42,0.78);
//     backdrop-filter: blur(2.5px);
//     transition: opacity 0.32s;
//   }
// `;

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Close menu on esc key
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") setIsMenuOpen(false);
//     };
//     if (isMenuOpen) window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [isMenuOpen]);

//   // Current path for link highlighting
//   const path = location.pathname;

//   return (
//     <>
//       <GlobalNavbarStyle />
//       <Nav>
//         <NavContainer>
//           <LogoLink to="/">
//             <LogoImg src="/images/logo.png" alt="Credora Logo" />
//           </LogoLink>
//           <Hamburger
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             onClick={() => setIsMenuOpen((v) => !v)}
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </Hamburger>
//           <NavLinks open={isMenuOpen}>
//             <NavItem>
//               <NavLink to="/" $active={path === "/"}>Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/about" $active={path === "/about"}>About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/internships" $active={path === "/internships"}>Internships</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/verify-certificate" $active={path === "/verify-certificate"}>Verify</NavLink>
//             </NavItem>
//           </NavLinks>
//         </NavContainer>
//         <Overlay open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
//       </Nav>
//     </>
//   );
// };

// export default Navbar;

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
  height:50px; 
  width: auto;
  @media (max-width: 600px) {
    height: 44px;
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