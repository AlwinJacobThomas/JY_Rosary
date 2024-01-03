import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useParams } from 'react';
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { minus } from 'react-icon';

const Nav = () => {
    const navRef = useRef();
    const [navOpen, setNavOpen] = useState(false);
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav") //this classname will be add/removed on toggle
    }
    const history = useNavigate;
    const [rosary_id, setRosaryId] = useState('');

    const handleClick = () => {
        // Navigate to localhost/rosary_id
        history("/" + rosary_id);
    };
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    {/* <img src="/assets/images/marylogo.png" alt="logo" /> */}
                    <h1>Knights of the Kingdom</h1>
                </div>

                {/* <div ref={navRef} className="main_nav_desktop">
                    <Link className='link active' to="/">Home</Link>
                    <Link className='link' to="/about">About</Link>
                    <a href="#section2" className="link">Map</a>
                    <Link className='link' to="/contact">Contact</Link>
                </div> */}
                <div className="access_code_desktop">
                    <input placeholder='eg:R91' type="text" name='rosary_id' value={rosary_id} onChange={(e) => { setRosaryId(e.target.value) }} />

                    <button className='btn' onClick={handleClick} >Find Rosary</button>

                </div>
                <button className="open_nav_btn" onClick={() => setNavOpen(navOpen ? false : true)}><AiOutlineMenu /> </button>
            </nav>
            <ul className={`full_nav ${navOpen && 'active'}`}>
                <button className="full_nav_close_btn" onClick={() => setNavOpen(navOpen ? false : true)}><AiOutlineClose /> </button>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">CONTACT</a>
                </li>
                <li>
                    <a href="">MAP</a>
                </li>
                <li>
                    <a href="">ABOUT</a>

                </li>
            </ul>
        </>
    );
}

export default Nav;