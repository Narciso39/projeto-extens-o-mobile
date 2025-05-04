// src/store/auth/auth.ts
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
}

interface LoginPayload {
  token: string;
  userId: any;
}

const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  token: null,
  userId: null,
};


export const login = createAction<LoginPayload>("LOGIN");
export const logout = createAction("LOGOUT");

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(login, (state, action: PayloadAction<LoginPayload>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userId = null;
    });
});