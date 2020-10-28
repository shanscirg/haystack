import React from 'react'
import navBrand from '../assets/Haystack.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navBrand} width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Products</a>
                        <a className="navbar-item">Categories</a>
                        <a className="navbar-item">Contact</a>

                    </div>
                    <div className="navbar-end"></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
