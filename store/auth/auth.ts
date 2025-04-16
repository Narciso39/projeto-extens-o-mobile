import { AuthState } from "@/src/@types/login.types";
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  token: null,
};


export const login = createAction<string>("LOGIN");
export const logout = createAction("LOGOUT");

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(login, (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.token = null;
    });
});