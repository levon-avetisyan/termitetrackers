import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import globalReducer from './globalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
