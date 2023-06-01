import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operations';
import {
  handleAuthFullfiled,
  handleAuthPending,
  handleAuthRejected,
} from './handlers';

const initialState = {
  user: { name: null, email: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isFetching: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, handleAuthPending)
      .addCase(signUp.fulfilled, handleAuthFullfiled)
      .addCase(signUp.rejected, handleAuthRejected)
      .addCase(logIn.pending, handleAuthPending)
      .addCase(logIn.fulfilled, handleAuthFullfiled)
      .addCase(logIn.rejected, handleAuthRejected)
      .addCase(logOut.pending, handleAuthPending)
      .addCase(logOut.fulfilled, state => {
        state.isFetching = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleAuthRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
