import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/UserConfig"
import CartReducer from "../features/cart/CartSlice"

export const store = configureStore({
  reducer: {
     userState: UserReducer,
     cartState: CartReducer,
  }
});
