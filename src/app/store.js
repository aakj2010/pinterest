import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import pinReducer from '../features/pin/PinSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pin: pinReducer,
  },
});
