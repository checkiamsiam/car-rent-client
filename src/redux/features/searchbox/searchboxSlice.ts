import { createSlice } from "@reduxjs/toolkit";

type SearchBoxState = {
  dropOff: boolean;
};

const initialState: SearchBoxState = {
  dropOff: false,
};

const searchboxSlice = createSlice({
  name: "searchbox",
  initialState,
  reducers: {
    setDropOff(state, { payload }) {
      state.dropOff = payload;
    },
  },
});

export const searchboxReducer = searchboxSlice.reducer;

export const { setDropOff } = searchboxSlice.actions;
