import { configureStore } from '@reduxjs/toolkit';
import rootAuth from './auth/auth';

export const store = configureStore({
  reducer: {
    rootAuth: rootAuth
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;