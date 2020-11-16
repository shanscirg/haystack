import React from 'react';
import placehold from '../assets/images/placehold.jpg';

const MissionHero = () => {
    return (
        <section className='hero is-light is-large'>
            <div className='hero-body'>
                <div className="container">
                    <div className='columns'>
                        <div className='column'>
                            <img src={placehold} alt="I am a placeholder" />
                        </div>
                    </div>
                    <br />
                    <div className='columns'>
                        <div className='column'>
                            <h1 className='title'>
                                Who is this for?
                            </h1>
                            <p>
                                You! If you are a developer or creator who
                                is looking for any type of software to do
                                their job more efficiently, you will find
                                the software you need quickly.
                            </p>
                        </div>
                        <div className='column'>
                            <h1 className='title'>Why choose us?</h1>
                            <p>
                                We share the same frustrations you have when
                                it comes to finding reliable, usable software.
                                Google searches can be overwhelming, but our
                                team is committed to making your search results
                                meaningful and exactly what you need.
                            </p>
                        </div>
                        <div className='column'>
                            <h1 className='title'>Resources Galore!</h1>
                            <p>
                                With comparing products, take the guesswork out
                                of what you are searching for and discover some
                                    hidden needles {`(software)`} along the way!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MissionHero;
