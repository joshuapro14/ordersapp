import { createSlice } from "@reduxjs/toolkit";
import {USER_NAME, PASSWORD} from "../../app/constants";


export const initialState = {
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