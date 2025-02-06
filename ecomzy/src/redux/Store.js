import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlices"

export const store = configureStore({
    reducer:{
        cart: CartReducer,
    },
});