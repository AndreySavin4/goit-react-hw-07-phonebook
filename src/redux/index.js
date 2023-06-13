import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './createSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
