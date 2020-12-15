import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchMenu from '../components/SearchMenu';
import SearchProducts from '../components/SearchProducts';


const SearchResults = () => {
    return (
        <div>
            <h1>Results</h1>
        {/* <SearchFilter/> */}
        <SearchBar/>
        <SearchMenu/>
        <SearchProducts/>
        </div>
    )
}

export default SearchResults;
