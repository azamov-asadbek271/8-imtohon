import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: false,
  authReadyState: false,
};
export const UserConfig = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    authReady: (state) => {
      state.authReadyState = true;
    },
  },
});
export const { login, logout, authReady } = UserConfig.actions;
export default UserConfig.reducer;