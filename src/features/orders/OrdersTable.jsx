import {useSelector} from 'react-redux';
import {getAllOrders} from './ordersSlice';

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

    
    <table id="table-orders">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Vendor Name</th>
                <th>Order Status</th>
                <th>Pickup Date</th>
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