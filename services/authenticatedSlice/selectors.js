export const selectAuthenticated = (state) => state.authenticated;

export const selectIsAuthenticated = (state) =>
  selectAuthenticated(state).isAuthenticated;

export const AuthenticationStatus = {
  Authenticated: "authenticated",
  Unauthenticated: "unauthenticated",
  Undetermined: "undetermined",
};
export const selectAuthenticationStatus = (state) => {
  const getAuthenticatedRequestStatus =
    selectGetAuthenticatedRequestStatus(state);
  if (getAuthenticatedRequestStatus !== "fulfilled")
    return AuthenticationStatus.Undetermined;
  const isAuthenticated = selectIsAuthenticated(state);
  if (isAuthenticated) return AuthenticationStatus.Authenticated;
  return AuthenticationStatus.Unauthenticated;
};

export const selectUser = (state) => selectAuthenticated(state).user;

export const selectIsVerified = (state) =>
  selectUser(state).role !== "unverified";

export const selectGetAuthenticatedRequestStatus = (state) =>
  selectAuthenticated(state).getAuthenticatedRequestStatus;
