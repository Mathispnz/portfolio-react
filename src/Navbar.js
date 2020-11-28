import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
    const [onMob, setOnMob] = useState(false);

    // if (window.matchMedia('max-width: 500px')) {
    //     setOnMob(!onMob)
    // } 

    return(
        <div className="Navbar">
            <div className="Navbar_content">
                <Link to="/">
                    <div className="Navbar_logo">
                        <img src={process.env.PUBLIC_URL + "/images/mp-logo.svg"} alt="MP" />
                    </div>
                </Link>

                <div className="Navbar_links">
                    <Link to="/">Home</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="Navbar_links_mob">
                    <div className={onMob ? 'Menu_wrap Menu_wrap-open' : 'Menu_wrap'} onClick={() => {setOnMob(!onMob)}}>
                        <div className="Menu_line"></div>
                        <div className="Menu_line"></div>
                        <div className="Menu_line"></div>
                    </div>
                    <div className={onMob ? 'Menu_open Menu_open-visible' : 'Menu_open'}>
                        <Link to="/" onClick={() => {setOnMob(!onMob)}}>Home</Link>
                        <Link to="/work" onClick={() => {setOnMob(!onMob)}}>Work</Link>
                        <Link to="/education" onClick={() => {setOnMob(!onMob)}}>Education</Link>
                        <Link to="/about" onClick={() => {setOnMob(!onMob)}}>About</Link>
                        <Link to="/contact" onClick={() => {setOnMob(!onMob)}}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;