export const selectAuthenticated = (state) => state.authenticated;

export const selectIsAuthenticated = (state) =>
  selectAuthenticated(state).isAuthenticated;

export const selectUser = (state) => selectAuthenticated(state).user;

export const selectGetAuthenticatedRequestStatus = (state) =>
  selectAuthenticated(state).getAuthenticatedRequestStatus;
