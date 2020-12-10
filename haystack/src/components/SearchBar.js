import React, { useState } from 'react';

const SearchBar = () => {
    const [DropdownState, setDropdownState] = useState(Boolean);

    return (
        <div className='box mx-3'>
            <div className='field level'>
                <label className='label my-1'>Choose a language:</label>
                <div className='control my-1'>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='JavaScript' onChange={() => setDropdownState(false)} /> JavaScript</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='Python' onChange={() => setDropdownState(false)} /> Python</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='Ruby' onChange={() => setDropdownState(false)} /> Ruby</label>
                    <label className='radio pr-1'>
                        <input name='language' type='radio' defaultValue='null' onChange={() => setDropdownState(!DropdownState)} /> Other Language</label>
                </div>
                <div className='control is-expanded'>
                    <div className='select my-1 is-fullwidth' style={{ display: DropdownState === false ? 'none' : 'block' }}>
                        <select>
                            <option selected disabled defaultValue >Other Languages</option>
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
                    <input className='input is-medium' type='text' placeholder='Search here' />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
