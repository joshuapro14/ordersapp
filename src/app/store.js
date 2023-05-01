import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ordersReducer from '../features/orders/ordersSlice';
import loginReducer from '../features/login/loginSlice';

const rootReducer = combineReducers({
    orders: ordersReducer,
    login: loginReducer
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export const store = setupStore({});

/* export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        login: loginReducer
    }
}) */