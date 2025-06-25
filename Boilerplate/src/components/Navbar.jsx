import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <img src='/ravi_sample_logo.png' alt='logo' className='NavLogo' />
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: 0</span>
            </div>
        </div>
    );
};

export default Navbar;