import {
  HeaderContainer,
  HeaderLink,
  HeaderNavigation,
  NavContainer,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <HeaderLink to="/">RentCamp.</HeaderLink>
        <NavContainer>
          <HeaderLink to="/home">Rent</HeaderLink>
          <HeaderLink to="/favourite">Favourite</HeaderLink>
        </NavContainer>
      </HeaderNavigation>
    </HeaderContainer>
  );
};
