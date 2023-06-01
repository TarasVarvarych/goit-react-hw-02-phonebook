export const handleAuthPending = state => {
  state.isFetching = true;
};
export const handleAuthFullfiled = (state, action) => {
  state.isFetching = false;
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleAuthRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};
