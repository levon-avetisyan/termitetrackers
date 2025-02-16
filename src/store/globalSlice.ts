import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  [key: string]: boolean;
}

const initialState: GlobalState = {
  loading: false,
};

const globalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;
export default globalSlice.reducer;
