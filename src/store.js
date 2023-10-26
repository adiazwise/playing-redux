import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/carSlice';

export default configureStore({
    reducer : {
        cart: cartReducer
    }
});

