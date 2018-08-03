import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
    return(
        <div className="searchspace">
            <input type="search" placeholder="Search Fighters" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;