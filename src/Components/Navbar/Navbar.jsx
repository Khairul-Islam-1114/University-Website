import React from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Programms</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>
                    <button type="button" className='btn'>Contact Us</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar