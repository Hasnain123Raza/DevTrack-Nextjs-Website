import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    resetAuthentication: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },

    setAuthentication: (state, action) => {
      const { isAuthenticated, user } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.user = user;
    },
  },
});

export const { resetAuthentication, setAuthentication } =
  authenticatedSlice.actions;

export default authenticatedSlice.reducer;
