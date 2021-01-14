import React from 'react';

const SearchProducts = () => {
    return (
        <div className='container'>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <h1>Package Name</h1>
                            <div className='columns'>
                                <div className='column'>
                                    <p>Framework</p>
                                    <span id='frameworkName'></span>
                                    <p>Most recent update</p>
                                    <span id='recentUpdate'></span>
                                </div>
                                <div className='column'>
                                    <p>Weekly Downloads</p>
                                    <span id='weeklyDownloads'></span>
                                    <p>GitHub Stars</p>
                                    <span id='githubStars'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default SearchProducts;
