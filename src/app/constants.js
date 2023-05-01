export const searchBys = [
    'orderId', 'vendorName', 'orderStatus', 'pickUpDate'
]

export const USER_NAME = process.env.VITE_USER_NAME;
export const PASSWORD = process.env.VITE_PASSWORD;

export const ORDER_TABLE_HEADERS = {
    "orderId": "Order ID",
    "vendorName": "Vendor Name",
    "orderStatus": "Order Status",
    "pickUpDate": "Pickup Date"
}

export const ORDER_TABLE_HEADER_VALUES = Object.keys(ORDER_TABLE_HEADERS)
                                            .reduce((acc,key)=>{
                                                const val = ORDER_TABLE_HEADERS[key];
                                                acc[val] = key;
                                                return acc;
                                            }, {})