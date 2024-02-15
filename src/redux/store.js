import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: cardSlice,
});

export default store;
