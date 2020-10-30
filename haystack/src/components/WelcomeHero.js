import React from 'react';
import placehold from '../assets/placehold.jpg';

const WelcomeHero = () => {
    return (
        <section className='hero is-warning is-large'>
            <div className='hero-body pt-6'>
                <div className='columns mt-6 mb-6 pb-6'>
                    <div className='column is-10 is-offset-1'>
                        <div className="field">
                            <div className="control is-medium">
                                <input className="input is-medium" type="text" placeholder="Search here" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='columns level'>
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
                            <img src={placehold} alt="I am a placeholder" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WelcomeHero;
