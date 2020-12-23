import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import placehold from '../assets/images/placehold.jpg';


const SearchHero = () => {
    return (
        <section className='hero is-info is-large'>
            <div className='hero-body'>
                <div className='columns level'>
                    <div className='column'>
                        <h2>
                            Search with confidence
                            </h2>
                        <p>
                            All in one place, you can find everything
                            you need and more! Discoverable software
                            is out there!
                            </p>
                        <br />
                        <div className='field'>
                            <p className='control has-icons-left'>
                                <input className='input' type='text' placeholder='Search here!' />
                                <span className='icon is-small is-left'>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='column'>
                        <img src={placehold} alt='I am a placeholder' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchHero;
