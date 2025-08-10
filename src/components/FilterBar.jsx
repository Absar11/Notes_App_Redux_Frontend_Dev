import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../features/noteSlice';

const FilterBar = () => {
    const dispatch = useDispatch();

    return (
        <select onChange={(e) => dispatch(setFilter(e.target.value))}>
            <option value="All">All</option>
            <option value="Work">Work</option>
            <option value="Study">Study</option>
            <option value="Personal">Personal</option>
        </select>
    )
}

export default FilterBar