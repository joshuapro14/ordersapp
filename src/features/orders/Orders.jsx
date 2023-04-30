import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchOrders, getCurrentPage, getSearchBy, getSearchString, setCurrentPage} from './ordersSlice'
import OrdersTable from './OrdersTable';
import Pagination from './Pagination';
import Style from './orders.module.css';
import SearchBar from './SearchBar';


const Orders = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const searchBy= useSelector(getSearchBy);
    const searchString= useSelector(getSearchString);
    

    useEffect(() => {
        dispatch(fetchOrders());
    }, [currentPage]);

    useEffect(()=>{
      if(searchBy != null && searchString != null){
        currentPage == 1 && dispatch(fetchOrders());
       currentPage != 1 && dispatch(setCurrentPage(1));
      //  dispatch(setCurrentPage(1));
      //  dispatch(fetchOrders());
      }
    }, [searchBy, searchString]);

  return (
    <div className={Style.centerbox}>   
        <SearchBar />     
        <OrdersTable />
        <Pagination />
    </div>
    
  )
}

export default Orders