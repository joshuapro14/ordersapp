import axios from "axios";

const ordersURL = `${import.meta.env.VITE_JSON_SERVER_URL}/orders`;

export const fetchOrdersUsingOptions = async(options={}) => {
    const {page=1, limit=10, searchBy, searchString} = options;
    const params = {
        _page: page,
        _limit: limit
    }
    if(searchBy != null && searchString != null){
        params[`${searchBy}_like`] = searchString;
    }
    console.log('[Orders Service]',{
        options,
        params
    });
    const response = await axios.get(ordersURL, {
        params
    });
    const totalOrders = response.headers["x-total-count"]; // length of your data without page limit
    const orders = response.data;
    console.log('[Orders Service]',{
        orders,
        totalOrders,
        limit,
        page,
        params
    })
    return {
        orders,
        totalOrders,
        limit,
        page
    }
}