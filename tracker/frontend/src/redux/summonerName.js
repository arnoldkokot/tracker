import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "summonerName",
  initialState: {
    summonerName: null,
  },
  reducers: {
    change: (state, action) => {
      state.summonerName = action.payload;
    },
  },
});

export const { change } = counterSlice.actions;

export default counterSlice.reducer;
