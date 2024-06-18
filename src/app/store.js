import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/UserConfig"

export const store = configureStore({
  reducer: {
     userState: UserReducer,
  }
});
