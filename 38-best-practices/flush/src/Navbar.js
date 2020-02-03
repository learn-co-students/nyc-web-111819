import React from 'react';

function Navbar(props){

    return (
        <div id="navbar">
            <input placeholder="search" />
            <div id="filter-container">
                <div onClick={() => props.changeFilter("")} className="filter-item" id="all">All</div>
                <div onClick={() => props.changeFilter("Gender Neutral")} className="filter-item" id="neutral">Gender Neutral</div>
                <div onClick={() => props.changeFilter("Men")} className="filter-item" id="men">Men</div>
                <div onClick={() => props.changeFilter("Women")} className="filter-item" id="women">Women</div>
            </div>
        </div>
    )
}

export default Navbar;