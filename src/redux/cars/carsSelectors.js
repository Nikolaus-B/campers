import { createSelector } from "@reduxjs/toolkit";
import {
  selectEquipmentFilter,
  selectInputValue,
  selectTypeFilter,
} from "../filter/filterSelectors";

export const selectCars = (state) => state.cars.cars;

export const selectFilteredCarsByInput = createSelector(
  [selectCars, selectInputValue, selectEquipmentFilter],
  (cars, inputValue) => {
    return cars.filter((el) => {
      const { car } = el;
      const carName = car.name.toLowerCase();
      const carLocation = car.location.toLowerCase();

      return (
        carName.includes(inputValue.toLowerCase()) ||
        carLocation.includes(inputValue.toLowerCase())
      );
    });
  }
);

export const selectfilteredCarsByEquipment = createSelector(
  [selectCars, selectEquipmentFilter],
  (cars, equipmentFilter) => {
    return cars.filter(({ car }) => {
      const { transmission, details } = car;
      const KeysOfEquipment = [transmission];

      Object.entries(details).map(([key, value]) => {
        if (value !== 0) {
          KeysOfEquipment.push(key);
        }
      });

      return equipmentFilter.some((equip) => KeysOfEquipment.includes(equip));
    });
  }
);

export const selectFilteredByType = createSelector(
  [selectFilteredCarsByInput, selectTypeFilter],
  (cars, byType) => {
    if (byType.length === 0) {
      return cars;
    }

    return cars.filter((el) => {
      const { car } = el;
      const carForm = car.form.toLowerCase();

      return byType.some((type) => carForm.includes(type.toLowerCase()));
    });
  }
);
