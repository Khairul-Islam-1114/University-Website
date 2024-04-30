import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])

    return (

        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-250} duration={500}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset={-50} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-140} duration={500}>Testimonials</Link></li>
                <li>
                    <Link to='contact' smooth={true} offset={-205} duration={500} className='btn'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar