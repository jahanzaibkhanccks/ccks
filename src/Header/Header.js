import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #6e8efb;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 1rem 2rem;
    border-radius: 8px;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Alumni CCKS</span>
        </Logo>

        <NavMenu open={mobileMenuOpen}>
          <NavItem>
            <StyledNavLink to="/" end>Home</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/AlumniForm">Admission Form</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/AlumniList">Students</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/About">About</StyledNavLink>
          </NavItem>
        </NavMenu>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
