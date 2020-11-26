import React from 'react';
import placehold from '../assets/placehold.jpg';
import SearchBar from './SearchBar';

const WelcomeHero = () => {
    return (
        <section className='hero is-warning '>
            <div className='hero-body pt-5'>
                
                <div className='container'>
                    <div className='columns level mb-6'>
                        <div className='column'>
                            <h1 style={{ fontSize: '50px' }}>
                                {`</Haystack>`}
                            </h1>
                            <h3 style={{ fontSize: '30px' }}>
                                Never feel frustrated about finding the right package again!
                            </h3>
                            <br />
                            <button className='button is-danger is-light'>Search packages</button>
                        </div>
                        <div className='column'>
                            <img src={placehold} alt='I am a placeholder' />
                        </div>
                    </div>
                </div>
                <SearchBar/>
            </div>
        </section >
    )
}

export default WelcomeHero;
