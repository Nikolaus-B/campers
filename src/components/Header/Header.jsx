import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderNavigation } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <NavLink to="/">RentCamp</NavLink>
        <NavLink to="/home">Rent</NavLink>
        <NavLink to="/favourite">Favourite</NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  );
};
