import { Link } from "react-router-dom";
import { useRef, useState } from 'react';

const Nav = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav") //this classname will be add/removed on toggle
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/assets/images/marylogo.png" alt="logo" />
                    <h1>Knights of the Kingdom</h1>
                </div>

                <div ref={navRef} className="main_nav_desktop">
                    <Link className='link active' to="/">Home</Link>
                    <Link className='link' to="/about">About</Link>
                    <a href="#section2" className="link">Map</a>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
                <div className="access_code_desktop">
                    <input placeholder='Type Code' type="text" name='rosary_id' /><h3>/</h3>
                    <button className='btn' >Scan QR</button>
                </div>
                <button className="open_nav_btn">Open Nav</button>
            </nav>
            <ul className="full_nav">
                <li>
                    <a href="">HOME</a>
                </li>
                <li>ABOUT</li>
                <li>MAP</li>
                <li>CONTACT</li>
                <li></li>
            </ul>
        </>
    );
}

export default Nav;