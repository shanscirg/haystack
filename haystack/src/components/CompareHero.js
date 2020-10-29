import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import placehold from '../assets/placehold.jpg'


const CompareHero = () => {
    return (
        <div>
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
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input" type="password" placeholder="Password" />
                                    <span class="icon is-small is-left">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CompareHero
