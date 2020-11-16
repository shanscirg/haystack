import React from 'react';
import placehold from '../assets/images/placehold.jpg';


const CompareHero = () => {
    return (
        <section className='hero is-danger is-large'>
            <div className='hero-body'>
                <div className='columns level'>
                    <div className='column'>
                        <img src={placehold} alt="I am a placeholder" />
                    </div>
                    <div className='column'>
                        <h2>
                            Compare Products
                        </h2>
                        <p>
                            Did you ever wonder if you were picking
                            the right package to download only to get
                            overwhelmed with similar products? Haystack
                            allows you to compare products right here
                            on the go. Get a leg up with faster results!
                        </p>
                        <br />
                        <button className='button is-danger is-light'>Compare packages</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareHero;
