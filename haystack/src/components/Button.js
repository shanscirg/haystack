import React from 'react';
import { Link } from 'react-router-dom';

const ButtonComp = ({ text, href, onClick }) => {

    const btnStyle = {
        background: '#CF7500',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '21px'
    }

    return (
        <Link to={href}>
            <button type='button' className='button' style={btnStyle} onclick={onClick}>
                {text}
            </button>
        </Link>
    )
}

export default ButtonComp;