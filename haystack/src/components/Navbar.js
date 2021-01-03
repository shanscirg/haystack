import React from 'react';
import navBrand from '../assets/images/Haystack.jpg';

const Navbar = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='navbar-item' href='/'>
                    <img src={navBrand} width='112' height='28' alt='Haystack logo' />
                </a>
                <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample' href='/#'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-start'>
                    <a className='navbar-item' href='/SelectedProducts'>Products</a>
                    <a className='navbar-item' href='/Comparison'>Categories</a>
                    <a className='navbar-item' href='/Contact'>Contact</a>

                </div>
                <div className='navbar-end'></div>
            </div>
        </nav>
    )
}

export default Navbar;
