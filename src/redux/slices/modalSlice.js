import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  title: "",
  content: "",
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;

export const selectModalTitle = (state) => state.modal.title;

export const selectModalContent = (state) => state.modal.content;

export const selectModalVisibility = (state) => state.modal.isVisible;