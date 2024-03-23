import { createSelector } from "@reduxjs/toolkit";
import { selectInputValue } from "../filter/filterSelectors";

export const selectCars = (state) => state.cars.cars;

export const selectfilteredCars = createSelector(
  [selectCars, selectInputValue],
  (cars, inputValue) => {
    return cars.filter((el) => {
      const { car } = el;
      //   console.log(car);
      const carName = car.name.toLowerCase();
      const carLocation = car.location.toLowerCase();

      return (
        carName.includes(inputValue.toLowerCase()) ||
        carLocation.includes(inputValue.toLowerCase())
      );
    });
  }
);
