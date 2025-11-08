import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./authSlice";
import authShowReducer from "./authShowSlice"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    authShow: authShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;