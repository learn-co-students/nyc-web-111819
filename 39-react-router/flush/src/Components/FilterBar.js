import React from 'react';

function FilterBar(props) {
    return (
        <div className="filter-bar">
            <input name="searchTerm" onChange={props.handleChange} value={props.searchTerm} placeholder="search" />
            <label>
                Gender Filter:
                <select value={props.filter} name="filter" onChange={props.handleChange}>
                    <option value="">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="neutral">Gender Neutral</option>
                </select>
            </label>
        </div>
    )
}

export default FilterBar;