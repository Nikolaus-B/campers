import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    equipment: ["mechanic"],
    // equipment: ["ac", "automatic", "kitchen", "tv", "shower"],
    type: ["fullyintegrated"],
    // type: ["paneltruck", "fullyintegrated", "alcove"],
  },
  reducers: {
    changeInputFilter: (state, action) => {
      state.inputValue = action.payload;
    },
    toogleEquipmentFilter: (state, action) => {
      state.equipment.push(action.payload);
    },
  },
});

export const { changeInputFilter, toogleEquipmentFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
