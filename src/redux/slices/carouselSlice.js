import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    images: [],
    currentIndex: 0,
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    nextImage: (state) => {
      if (state.currentIndex < state.images.length - 1) {
        state.currentIndex++;
      } else {
        state.currentIndex = 0;
      }
    },
    previousImage: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      } else {
        state.currentIndex = state.images.length - 1;
      }
    }
  },
});

export const { setImages, setCurrentIndex, nextImage, previousImage } =
  carouselSlice.actions;

export default carouselSlice.reducer;
