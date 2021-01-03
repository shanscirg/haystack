import React, { useContext, useState, useEffect } from 'react';
import Image from './Image';
import Button from './Button';
import placeholder from '../assets/images/compare-placeholder.png';
import '../assets/css/Modal.css';
import { MyContext } from '../utils/Context';


const Modal = () => {

    const { isCompareModalActive, setIsCompareModalActive } = useContext(MyContext);

    const [windowWidth, setWindowWidth] = useState(0);

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener('resize', resizeWindow);
        return () => window.removeEventListener('resize', resizeWindow);
    }, []);


    // useEffect for dev purposes only so that modal is active
    useEffect(() => {
        setIsCompareModalActive(true);
    }, []);

    const removeAll = () => {
        // remove all products from compare state (context or localStorage)
    };

    // const removeFromCompare = () => {
    //     // remove product from compare state (context or localStorage)
    // };

    const imgStyle = {
        width: '256px',
        position: 'relative',
        margin: '10px auto'
    };

    return (
        <>
            {isCompareModalActive &&
                <div className='modal is-active'>
                    {/* MSG FROM BULMA: You may also want to add the 'is-clipped' modifier to a containing element (usually html) to stop scroll overflow. */}
                    <div className='modal-background'></div>
                    <div className='modal-content has-background-white columns' style={{ width: windowWidth >= 769 ? '85%' : windowWidth >= 500 ? '63%' : '85%' }}>
                        <div className='column is-three-quarters'>
                            <Image
                                src={placeholder}
                                alt='Product to Compare 1'
                                displayCloseBtn={true}
                                styles={imgStyle}
                            />
                            <Image
                                src={placeholder}
                                alt='Product to Compare 2'
                                displayCloseBtn={true}
                                styles={imgStyle}
                            />
                            <Image
                                src={placeholder}
                                alt='Product to Compare 3'
                                displayCloseBtn={true}
                                styles={imgStyle}
                            />
                        </div>
                        <div className='btn-div column'>
                            <Button
                                href='/Comparison'
                                text='Compare All'
                            />
                            <p onClick={removeAll} className='remove-btn'>Remove All</p>
                        </div>
                    </div>
                    <button className='modal-close is-large' aria-label='close'></button>
                </div>
            }
        </>
    )
};

export default Modal;