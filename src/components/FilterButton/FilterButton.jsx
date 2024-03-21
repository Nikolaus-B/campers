import { Icon } from "../Icon/Icon";
import {
  ButtonContentContainer,
  FilterButtonStyled,
} from "./FilterButton.styled";

export const FilterButton = ({ id, iconType, text }) => {
  return (
    <FilterButtonStyled onClick={() => console.log(text)}>
      <ButtonContentContainer>
        <Icon
          iconId={id}
          width={iconType === "equipment" ? 32 : 40}
          height={iconType === "equipment" ? 32 : 28}
        />
        <p>{text}</p>
      </ButtonContentContainer>
    </FilterButtonStyled>
  );
};
