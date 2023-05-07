import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./slices/carouselSlice"

export const store = configureStore({
  reducer: {
    carouselSlice,
  },
});
