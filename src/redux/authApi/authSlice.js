import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(logOut.fulfilled, state => {
        state.isFetching = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
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
      })
      .addMatcher(
        isAnyOf(signUp.pending, logIn.pending, logOut.pending),
        handleAuthPending
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        handleAuthFullfiled
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, logOut.rejected),
        handleAuthRejected
      );
  },
});

export const authReducer = authSlice.reducer;
