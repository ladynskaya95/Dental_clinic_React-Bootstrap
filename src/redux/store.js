import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./slices/carouselSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});
