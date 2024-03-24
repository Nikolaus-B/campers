import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    equipment: [],
    // equipment: ["ac", "automatic", "kitchen", "tv", "shower", "mechanic"],
    type: [],
    // type: ["paneltruck", "fullyintegrated", "alcove"],
  },
  reducers: {
    changeInputFilter: (state, action) => {
      state.inputValue = action.payload;
    },
    toogleEquipmentFilter: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    toogleTypeFilter: (state, action) => {
      const index = state.type.indexOf(action.payload);
      if (index === -1) {
        state.type.push(action.payload);
      } else {
        state.type.splice(index, 1);
      }
    },
  },
});

export const { changeInputFilter, toogleEquipmentFilter, toogleTypeFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
