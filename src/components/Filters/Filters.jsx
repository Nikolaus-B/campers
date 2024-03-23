import { useDispatch } from "react-redux";
import { FilterButton } from "../FilterButton/FilterButton";
import {
  CategoriesLine,
  CategoriesText,
  FilterInput,
  FilterText,
  FiltersButtonContainer,
  Location,
  SearchButton,
} from "./Filters.styled";
import { changeInputFilter } from "../../redux/filter/filterSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Location>Location</Location>
        <FilterInput
          onChange={(e) => dispatch(changeInputFilter(e.target.value))}
          name="location"
          type="text"
          placeholder="Kyiv, Ukraine"
        />
      </div>
      <FilterText>Filters</FilterText>
      <div>
        <CategoriesText>Vehicle equipment</CategoriesText>
        <CategoriesLine></CategoriesLine>
        <FiltersButtonContainer>
          <FilterButton id={"ac"} iconType={"equipment"} text={"AC"} />
          <FilterButton
            id={"automatic"}
            iconType={"equipment"}
            text={"Automatic"}
          />
          <FilterButton
            id={"kitchen"}
            iconType={"equipment"}
            text={"Kitchen"}
          />
          <FilterButton id={"tv"} iconType={"equipment"} text={"TV"} />
          <FilterButton
            id={"shower"}
            iconType={"equipment"}
            text={"Shower/WC"}
          />
        </FiltersButtonContainer>
        <CategoriesText>Vehicle type</CategoriesText>
        <CategoriesLine></CategoriesLine>
        <FiltersButtonContainer>
          <FilterButton id={"van"} iconType={"vehicle"} text={"Van"} />
          <FilterButton
            id={"fully-integrated"}
            iconType={"vehicle"}
            text={"Fully Integrated"}
          />
          <FilterButton id={"alcove"} iconType={"vehicle"} text={"Alcove"} />
        </FiltersButtonContainer>
      </div>
      <SearchButton>Search</SearchButton>
    </div>
  );
};
