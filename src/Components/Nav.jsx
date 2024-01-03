import { Link} from "react-router-dom";
import { useRef, useState, useParams } from 'react';

const Nav = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav") //this classname will be add/removed on toggle
    }
    // const history = useHistory();
    const [rosary_id, setRosaryId] = useState('');
    
    // const handleClick = () => {
    //     // Navigate to localhost/rosary_id
    //     history.push(`/${rosary_id}`);
    // };
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
                    <input placeholder='Type Code'   type="text" name='rosary_id' value={rosary_id} />
                    {/* onChange={(e) => setRosaryId(e.target.value)} */}
                    <button className='btn' >Find Rosary</button>
                    {/* onClick={handleClick} */}
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