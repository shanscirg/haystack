import React from 'react';
import '../assets/css/Image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Image = ({ styles, src, alt, displayCloseBtn, onBtnclick }) => {

    const { width, position, margin } = styles;

    const iconStyle = {
        color: 'red',
        border: '1px solid red',
        borderRadius: '50%',
        fontSize: '11px'
    }

    const btnStyle = {
        position: 'absolute',
        background: 'none',
        border: 'none'
    }

    return (
        <>
            <figure className="image is-fullwidth" style={{ width, position, margin }}>
                <img src={src} alt={alt} />
                {displayCloseBtn &&
                    <button className='button close-btn' onclick={onBtnclick} style={btnStyle}>
                        <span className='icon is-small' style={iconStyle}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </button>
                }
            </figure>
        </>
    );
};

export default Image;