import React from 'react'
import {useSelector} from 'react-redux';
import {getAllOrders} from './ordersSlice';
import {ORDER_TABLE_HEADERS} from '../../app/constants'

import Style from './ordersTable.module.css';

const TableRow = ({order}) => {
    return (
        <tr>
            <td>{order.orderId}</td>
            <td>{order.vendorName}</td>
            <td>{order.orderStatus}</td>
            <td>{order.pickUpDate}</td>
        </tr>
    )
}

const OrdersTable = () => {
    const orders = useSelector(getAllOrders);
    if(!Array.isArray(orders) || orders.length == 0)return null;
  return (
    <div className={Style.ordersTable}>

    
    <table data-testid="table-orders">
        <thead>
            <tr>
                <th>{ORDER_TABLE_HEADERS.orderId}</th>
                <th>{ORDER_TABLE_HEADERS.vendorName}</th>
                <th>{ORDER_TABLE_HEADERS.orderStatus}</th>
                <th>{ORDER_TABLE_HEADERS.pickUpDate}</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map((order) => <TableRow order={order} key={order.orderId}/>)
            }
        </tbody>

    </table>
    </div>
  )
}

export default OrdersTable