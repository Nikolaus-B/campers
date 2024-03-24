import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 30px 64px;
  max-width: 1440px;

  border-bottom: 1px solid ${(p) => p.theme.colors.loadMoreBorderColor};
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: ${(p) => p.theme.fonts.smSize};
  color: ${(p) => p.theme.colors.dark};

  transition: color ${(p) => p.theme.transition.transitionDurAndFunc};

  &:hover {
    color: ${(p) => p.theme.colors.hoverColor};
  }
`;
