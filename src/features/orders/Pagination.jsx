/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, getCurrentPage, getTotalOrders, getLimitPerPage } from './ordersSlice';

const DropDownPages = memo(({ currentPage, totalPages }) => {
    const dispatch = useDispatch();
    const change = (e) => {
        dispatch(setCurrentPage(e.target.value));
    }
    const options = new Array(totalPages).fill();
    return (
        <select data-testid="selectPage" onChange={change} value={currentPage}>
            {
                options
                    .map((_, i) => (
                        <option value={i + 1} key={`page${i}`}>
                            {i + 1}
                        </option>
                    ))
            }
        </select>
    )
})


const Pagination = () => {

    const totalOrders = useSelector(getTotalOrders);
    const limitPerPage = useSelector(getLimitPerPage);
    const totalPages = Math.ceil(totalOrders / limitPerPage);
    const currentPage = useSelector(getCurrentPage);
    return (
        <div>
            Page {<DropDownPages {...{ currentPage, totalPages }} />} of 
            <span data-testid="totalpage-count"> {totalPages} </span>
        </div>
    )
}

export default Pagination