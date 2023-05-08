import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {},
  reducers: {
    setImages: (state, action) => {
      const { id, images } = action.payload;
      state[id] = {
        images,
        currentIndex: 0,
      };
    },
    setCurrentIndex: (state, action) => {
      const { id, currentIndex } = action.payload;
      state[id].currentIndex = currentIndex;
    },
    nextImage: (state, action) => {
      const { id } = action.payload;
      state[id].currentIndex++;
    },
    previousImage: (state, action) => {
      const { id } = action.payload;
      state[id].currentIndex--;
    },
  },
});

export const { setImages, setCurrentIndex, nextImage, previousImage } =
  carouselSlice.actions;

export default carouselSlice.reducer;
