// import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "../Icon/Icon";
import {
  ButtonContentContainer,
  FilterButtonStyled,
} from "./FilterButton.styled";
import { toogleEquipmentFilter } from "../../redux/filter/filterSlice";

export const FilterButton = ({ id, iconType, text }) => {
  // const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <FilterButtonStyled onClick={() => dispatch(toogleEquipmentFilter(text))}>
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
