import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrdersUsingOptions } from './ordersService';


const initialState = {
    orders: [],
    totalOrders: 0,
    limitPerPage: 10,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    error: null,
    currentPage: 1,
    searchBy: null,
    searchString: null
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const options = {
        page: state.orders.currentPage,
        limit: state.orders.limitPerPage,
        searchBy: state.orders.searchBy,
        searchString: state.orders.searchString
    }
    return fetchOrdersUsingOptions(options);

})

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setSearch(state, action) {
            const { searchBy, searchString } = action.payload;
            state.searchString = searchString;
            state.searchBy = searchBy;
        },
        setCurrentPage(state, action) {         
            console.log('[setCurrentPage]',{currentPage: state.currentPage, payload: action.payload})   
            state.currentPage = +(action.payload || 1);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { orders, totalOrders } = action.payload;
                state.totalOrders = totalOrders;
                state.orders = orders || [];                
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed'
                console.log('Failed - fetchORders', action.error.message);
                state.error = action.error.message
            })
    }
})

export const getAllOrders = (state) => state.orders.orders;
export const getCurrentPage = (state) => state.orders.currentPage;
export const getSearchBy = (state) => state.orders.searchBy;
export const getSearchString = (state) => state.orders.searchString;
export const getTotalOrders = (state) => state.orders.totalOrders;
export const getLimitPerPage = (state) => state.orders.limitPerPage;
export const getOrdersStatus = (state) => state.orders.status;
export const getOrdersError = (state) => state.orders.error;
export const {setCurrentPage, setSearch} = ordersSlice.actions;
export default ordersSlice.reducer;