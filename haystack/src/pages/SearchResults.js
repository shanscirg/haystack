import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchMenu from '../components/SearchMenu/SearchMenu';
import SearchProducts from '../components/SearchProducts';


const SearchResults = () => {
    return (
        <div>
            <h1>Results</h1>
            <SearchBar />
            <div className='columns'>
                <div className='column is-one-quarter'>
                    <SearchMenu />
                </div>
                <div className='column mx-3'>
                    <div className='columns is-multiline is-centered'>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                        <div className='column is-full'>
                            <SearchProducts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
