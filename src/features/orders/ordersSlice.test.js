/**
 * @jest-environment jsdom
 */


import ordersReducer, {initialState as initState, setCurrentPage, setSearch} from "./ordersSlice";
import {searchBys} from "../../app/constants"

describe("Orders Reducer", ()=> {
    it("should return the initial state when passed an empty action", ()=> {
        const initialState = undefined;
        const action = {type: ""};
        const result = ordersReducer(initialState, action);
        expect(result).toEqual(initState);
    })

    it("should return updated state with current page when setCurrentPage action is called", ()=> {
        const initialState = undefined;
        const action = setCurrentPage('2');
        const result = ordersReducer(initialState, action);
        expect(result).toEqual({...initState, currentPage: 2});
    })

    it("should return updated state with search object when setSearch action is called", ()=> {
        const initialState = undefined;
        const searchObj = {searchBy: searchBys[0], searchString: "12"}
        const action = setSearch(searchObj);
        const result = ordersReducer(initialState, action);
        expect(result).toEqual({...initState, ...searchObj});
    })

})