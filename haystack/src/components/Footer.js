import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-svg-core';

const Footer = () => {
    return (
        <footer class="footer">
            <div className='container'>
                <div className='columns'>
                    <div className='column is-half has-text-left'>
                        <p>
                            Haystack
                            </p>
                    </div>
                    <div className='column has-text-right'>
                        <p>
                            Products
                            </p>
                    </div>
                    <div className='column has-text-right'>
                        <p>
                            Categories
                            </p>
                    </div>
                    <div className='column has-text-right'>
                        <p>
                            Contact us
                            </p>
                    </div>
                    <div className='column has-text-right'>
                        <p>
                            Search
                            </p>
                    </div>
                </div>
                <hr style={{ height: '6px', backgroundColor: 'orange', marginTop: '0', }} />
                <div className='columns'>
                    <div className='column is-three-quarters has-text-left'>
                        <p>
                            &#xa9; 2020 Haystack. All Rights Reserved
                            </p>
                    </div>
                    <div className='column'>
                        <p>LinkedIn</p>
                    </div>
                    <div className='column'>
                        <p>GitHub</p>
                    </div>
                    <div className='column'>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
