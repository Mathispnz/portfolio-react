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
                <Link to="/portfolio-react/">
                    <div className="Navbar_logo">
                        <img src={process.env.PUBLIC_URL + "/images/mp-logo.svg"} alt="MP" />
                    </div>
                </Link>

                <div className="Navbar_links">
                    <Link to="/portfolio-react/">Home</Link>
                    <Link to="/portfolio-react/work">Work</Link>
                    <Link to="/portfolio-react/education">Education</Link>
                    <Link to="/portfolio-react/about">About</Link>
                    <Link to="/portfolio-react/contact">Contact</Link>
                </div>
                <div className="Navbar_links_mob">
                    <div className={onMob ? 'Menu_wrap Menu_wrap-open' : 'Menu_wrap'} onClick={() => {setOnMob(!onMob)}}>
                        <div className="Menu_line"></div>
                        <div className="Menu_line"></div>
                        <div className="Menu_line"></div>
                    </div>
                    <div className={onMob ? 'Menu_open Menu_open-visible' : 'Menu_open'}>
                        <Link to="/portfolio-react/" onClick={() => {setOnMob(!onMob)}}>Home</Link>
                        <Link to="/portfolio-react/work" onClick={() => {setOnMob(!onMob)}}>Work</Link>
                        <Link to="/portfolio-react/education" onClick={() => {setOnMob(!onMob)}}>Education</Link>
                        <Link to="/portfolio-react/about" onClick={() => {setOnMob(!onMob)}}>About</Link>
                        <Link to="/portfolio-react/contact" onClick={() => {setOnMob(!onMob)}}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;