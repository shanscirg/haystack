import React, { useState } from 'react';

const SearchBar = () => {
    const [dropdownState, setDropdownState] = useState(Boolean);
    const [userSearch, setUserSearch] = useState({ language: 'javascript', keyword: '' })
    const [searchResult, setSearchResultState] = useState([]);

    const submitSearch = event => {
        event.preventDefault()
        fetch('https://api.github.com/search/repositories?q=' + userSearch['language'] + 'language:' + userSearch['keyword'] + '&sort=stars&order=desc')
            .then(res => res.json())
            .then(data => {
                setSearchResultState(data.items);
                console.log(searchResult);
            })
    }

    return (
        <div className='box mx-3'>
            <div className='field level'>
                <label className='label my-1'>Choose a language:</label>
                <div className='control my-1'>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='JavaScript' onChange={(event) => { setDropdownState(false); setUserSearch({ language: event.target.value }) }} /> JavaScript</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='Python' onChange={(event) => { setDropdownState(false); setUserSearch({ language: event.target.value }) }} /> Python</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='Ruby' onChange={(event) => { setDropdownState(false); setUserSearch({ language: event.target.value }) }} /> Ruby</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='null' onChange={(event) => { setDropdownState(!dropdownState); setUserSearch({ language: event.target.value }) }} /> Other Language</label>
                </div>
                <div className='control is-expanded'>
                    <div className='select my-1 is-fullwidth' style={{ display: dropdownState === false ? 'none' : 'block' }}>
                        <select defaultValue='Other Languages'>
                            <option disabled defaultValue >Other Languages</option>
                            <option defaultValue='C#'>C#</option>
                            <option defaultValue='Java'>Java</option>
                            <option defaultValue='Swift'>Swift</option>
                            <option defaultValue='PHP'>PHP</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='field'>
                <div className='control is-medium'>
                    <input className='input is-medium' type='text' placeholder='Search here'
                        onChange={(event) => setUserSearch({ keyword: event.target.value })} />
                    <input type='submit' value='Search' onClick={e => submitSearch(e)} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
