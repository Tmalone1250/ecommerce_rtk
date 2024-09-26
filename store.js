import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/components/CartSlice.jsx";
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;