import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

const initialState:AuthState = {
    isAuthenticated: false,
    username:"noufalkakdlr",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
});


export default authSlice.reducer;
