import { FilterButton } from "../FilterButton/FilterButton";

export const Filters = () => {
  return (
    <div>
      <div>
        <p>Location</p>
        <input name="location" type="text" />
      </div>
      <p>Filters</p>
      <div>
        <p>Vehicle equipment</p>
        <div></div>
        <div>
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
        </div>
        <p>Vehicle type</p>
        <div></div>
        <div>
          <FilterButton id={"camper-2"} iconType={"vehicle"} text={"Van"} />
          <FilterButton
            id={"camper-1"}
            iconType={"vehicle"}
            text={"Fully Integrated"}
          />
          <FilterButton id={"camper-3"} iconType={"vehicle"} text={"Alcove"} />
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};
