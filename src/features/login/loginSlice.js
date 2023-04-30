import { createSlice } from "@reduxjs/toolkit";

const USER_NAME = import.meta.env.VITE_USER_NAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

const initialState = {
    isLoggedIn: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state,action){
            const {userName, password} = action.payload;
            state.isLoggedIn = userName == USER_NAME && password == PASSWORD;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
});

export const getIsLoggedIn = (state) => state.login.isLoggedIn;
export const {login,logout} = loginSlice.actions;
export default loginSlice.reducer;