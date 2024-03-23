import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    equipment: [],
    type: [],
  },
  reducers: {
    changeInputFilter: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { changeInputFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
