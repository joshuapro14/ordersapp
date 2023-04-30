/**
 * @jest-environment jsdom
 */


import loginReducer, {initialState as initState, login, logout} from "./loginSlice";
import {USER_NAME, PASSWORD} from "../../app/constants";

describe("Login Reducer", ()=> {
    it("should return the initial state when passed an empty action", ()=> {
        const initialState = undefined;
        const action = {type: ""};
        const result = loginReducer(initialState, action);
        expect(result).toEqual(initState);
    })

    it("should return updated state with isLoggedIn=true when login action is called with correct credentials", ()=> {
        const initialState = undefined;
        const action = login({userName: USER_NAME, password: PASSWORD});
        const result = loginReducer(initialState, action);
        expect(result).toEqual({...initState, isLoggedIn: true});
    })

    it("should return updated state with isLoggedIn=false when login action is called with BAD credentials", ()=> {
        const initialState = undefined;
        const action = login({userName: `${USER_NAME}_BAD`, password: `${PASSWORD}_BAD`});
        const result = loginReducer(initialState, action);
        expect(result).toEqual({...initState, isLoggedIn: false});
    })

    it("should return updated state with isLoggedIn=false when logout action is called", ()=> {
        const initialState = undefined;
        const action = logout();
        const result = loginReducer(initialState, action);
        expect(result).toEqual({...initState, isLoggedIn: false});
    })

})