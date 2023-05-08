import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isModalOpen: false,
  name: "",
  phoneNumber: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.isModalOpen = action.payload;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
    updatePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { toggleModal, updateName, updatePhoneNumber } =
  modalSlice.actions;

export const selectModalStatus = (state) => state.modal.isModalOpen;
export const selectName = (state) => state.modal.name;
export const selectPhoneNumber = (state) => state.modal.phoneNumber;

export default modalSlice.reducer;