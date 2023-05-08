import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./slices/carouselSlice";
import modalSlice from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    modal: modalSlice
  },
});
