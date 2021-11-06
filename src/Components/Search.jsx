import React from 'react';
import '../index.css';

const Search = (props) => {
    return(
        <input type="search" name="search-btn" id="search-bar" placeholder="Enter a valid input" onChange={props.Change} />
    )
}

export default Search;