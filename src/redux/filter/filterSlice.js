import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    equipment: [],
    type: [],
  },
  reducers: {},
});

export const filterReducer = filterSlice.reducer;
