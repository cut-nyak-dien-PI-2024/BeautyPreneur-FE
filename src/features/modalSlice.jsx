import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen:false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showingModal: (state) => {
      state.isModalOpen = true;
    },
    handleOk: (state) => {
      state.isModalOpen = false;
    },
    handleCancel: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { showingModal, handleOk, handleCancel } = modalSlice.actions;

export default modalSlice.reducer;
