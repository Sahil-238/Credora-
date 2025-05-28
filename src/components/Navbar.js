import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  ${'' /* overflow-x: hidden; */}
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
  height: 72px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1600;
`;

const LogoImg = styled.img`
  height: 150px; /* Increased desktop logo size */
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 120px; /* Reduced logo size for mobile view */
  }
  
  @media (max-width: 480px) {
    height: 100px; /* Further reduction on very small screens */
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1600;
  position: relative;
  display: none;

  @media (max-width: 768px) {
    display: block; // Always show in mobile view
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    background: ${colors.navBg};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem; // Add padding-top to account for close button
    box-shadow: ${({ $isOpen }) => ($isOpen ? "-4px 0 16px rgba(0,0,0,0.1)" : "none")};
    z-index: 1550;
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: ${colors.glassBg};
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    justify-content: center;
  }

  ${({ $active }) => $active && `
    color: ${colors.primary};
    background: ${colors.glassBg};
    font-weight: 600;
  `}
`;

const AuthButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none; // Add this line to remove underline

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${colors.text};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1600;
  padding: 8px;
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    &:hover {
      color: ${colors.primary};
    }
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
    z-index: 1540; // Lower than NavLinks
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isAuthenticated = !!localStorage.getItem('token');

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu on ESC press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close menu on window resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <Nav>
      <NavContainer>
        <LogoLink to="/">
          <LogoImg src="/images/logo.png" alt="Logo" />
        </LogoLink>

        <MobileMenuButton 
          onClick={() => setIsMenuOpen(true)} 
          aria-label="Open menu">
          {!isMenuOpen && <FaBars />}
        </MobileMenuButton>

        <Overlay 
          $isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(false)} 
          aria-hidden="true"
        />

        <NavLinks $isOpen={isMenuOpen}>
          <CloseButton 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }} 
            $isOpen={isMenuOpen}
            aria-label="Close menu"
          />
          
          <NavItem>
            <NavLink 
              to="/" 
              $active={location.pathname === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              to="/about" 
              $active={location.pathname === '/about'}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              to="/internships" 
              $active={location.pathname === '/internships'}
              onClick={() => setIsMenuOpen(false)}
            >
              Internships
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
              to="/verify-certificate" 
              $active={location.pathname === '/verify-certificate'}
              onClick={() => setIsMenuOpen(false)}
            >
              Verify
            </NavLink>
          </NavItem>

          {isAdmin && (
            <NavItem>
              <NavLink 
                to="/upload-certificate" 
                $active={location.pathname === '/upload-certificate'}
                onClick={() => setIsMenuOpen(false)}
              >
                Upload
              </NavLink>
            </NavItem>
          )}

          {!isAuthenticated ? (
            <>
              <NavItem>
                <NavLink 
                  to="/login" 
                  $active={location.pathname === '/login'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              </NavItem>
              
              <NavItem>
                <AuthButton as={Link} to="/signup">
                  Sign Up
                </AuthButton>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <AuthButton onClick={handleLogout}>
                Logout
              </AuthButton>
            </NavItem>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;