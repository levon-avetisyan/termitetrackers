import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  [key: string]: boolean;
}

const initialState: ModalState = {
  appointment: true,
  success: false,
  error: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      console.log('openModal action payload:', action.payload); // Add this line
      state[action.payload] = true;
      console.log('state after openModal:', state); // Add this line
    },
    closeModal(state, action: PayloadAction<string>) {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
