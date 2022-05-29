import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./summonerName";

export default configureStore({
  reducer: {
    summonerName: nameReducer,
  },
});
