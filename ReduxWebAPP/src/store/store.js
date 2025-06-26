import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    product: productReducer,
  },
});
