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

export const Filters = () => {
  return (
    <div>
      <div>
        <Location>Location</Location>
        <FilterInput name="location" type="text" placeholder="Kyiv, Ukraine" />
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
          <FilterButton id={"camper-2"} iconType={"vehicle"} text={"Van"} />
          <FilterButton
            id={"camper-1"}
            iconType={"vehicle"}
            text={"Fully Integrated"}
          />
          <FilterButton id={"camper-3"} iconType={"vehicle"} text={"Alcove"} />
        </FiltersButtonContainer>
      </div>
      <SearchButton>Search</SearchButton>
    </div>
  );
};
