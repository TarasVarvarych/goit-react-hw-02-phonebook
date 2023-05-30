export const handleAuthPending = state => {
  state.isLoading = true;
};
export const handleAuthFullfiled = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleAuthRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
