/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { memo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchBy, getSearchString, setSearch } from './ordersSlice';
import Style from './searchBar.module.css';
import {searchBys} from '../../app/constants'


const DropDownFilters = memo(({ searchBy, setSearchBy }) => {
    const change = (e) => {
        setSearchBy(e.target.value);
    }
    return (
        <select data-testid="searchBySelect" onChange={change} value={searchBy}>
            {
                searchBys
                    .map((s) => (
                        <option value={s} key={`searchBy${s}`}>
                            {s}
                        </option>
                    ))
            }
        </select>
    )
})

const FilterBox = memo(({searchString, setSearchString, onEnter})=>{
    
    const handleChange = (e) => {
        setSearchString(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.code === "Enter" && typeof onEnter == "function"){
            onEnter();
        }
    }

    return (
        <span>
            <input type="text" placeholder='Search/Filter' 
                className={Style.input} onChange={handleChange} 
                onKeyDown={handleKeyDown}
                value={searchString}
                data-testid="inputsearch"
            />
        </span>
    )

})

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchBy, setSearchBy] = useState(searchBys[0]);
    const [searchString, setSearchString] = useState("");
    const onEnter = () => {
        dispatch(setSearch({searchBy, searchString}));
    }
  return (
    <div>
        <DropDownFilters {...{searchBy, setSearchBy}}/>
        {searchBy && <FilterBox {...{searchString, setSearchString, onEnter}}/>}

    </div>
  )
}

export default SearchBar