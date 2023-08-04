import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = ({ zIndex }) => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <Wrapper  zIndex = {zIndex}>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${COLORS.white};
  position: sticky;
  top: 0;
  z-index: ${p => p.zIndex};
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 32px;
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  position: relative;
  background-color: inherit;
`;

const Nav = styled.nav`
  display: flex;
  column-gap: 48px;
  position: relative;
  background-color: inherit;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
