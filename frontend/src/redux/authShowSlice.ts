import { createSlice } from "@reduxjs/toolkit";

const authShowSlice = createSlice({
  name: "authShow",
  initialState: {
    showLoginModal: false,
    showSignupModal: false,
  },
  reducers: {
    showLogin: (state) => {
      state.showLoginModal = true;
    },
    hideLogin: (state) => {
      state.showLoginModal = false;
    },
    showSignup: (state) => {
      state.showSignupModal = true;
    },
    hideSignup: (state) => {
      state.showSignupModal = false;
    },
  },
});

export default authShowSlice.reducer;

export const { showLogin, hideLogin, showSignup, hideSignup } =
  authShowSlice.actions;
