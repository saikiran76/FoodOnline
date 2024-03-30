import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Added the slice to our Redux Store -  For now, we have cart slice in our store
const AppStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default AppStore;