import React from 'react';

const SearchBar = () => {
    return (
        <div className='box mx-3'>
            <div className="field level">
                <label className='label my-1'>Choose a language:</label>
                <div className="control my-1">
                    <label className="radio pr-1">
                        <input type="radio" name="question" /> JavaScript</label>
                    <label className="radio pr-1">
                        <input type="radio" name="question" /> Python</label>
                    <label className="radio pr-1">
                        <input type="radio" name="question" /> Ruby</label>
                    <label className="radio pr-1">
                        <input type="radio" name="question" /> PHP</label>                    
                </div>
                <div className="select my-1">
                    <select>
                        <option>Other Languages</option>
                        <option>C#</option>
                        <option>Java</option>
                        <option>Swift</option>
                        <option>Kubernetes</option>
                    </select>
                </div>
            </div>
            <div className="field">
                <div className="control is-medium">
                    <input className="input is-medium" type="text" placeholder="Search here" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
