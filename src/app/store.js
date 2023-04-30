import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from '../features/orders/ordersSlice';
import loginReducer from  '../features/login/loginSlice';

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        login: loginReducer
    }
})