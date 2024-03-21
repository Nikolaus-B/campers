import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "contacts",
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
