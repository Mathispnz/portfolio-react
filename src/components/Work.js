import React, { useState, useRef } from 'react';
import '../styles/Work.scss';

export default function Work() {
    const [fullScreen, setFullScreen] = useState(false);
    const [fullScreen2, setFullScreen2] = useState(false);
    const [fullScreen3, setFullScreen3] = useState(false);
    const [fullScreen4, setFullScreen4] = useState(false);
    const [fullScreen5, setFullScreen5] = useState(false);

    const elAnchor = useRef();

    const scrollTo = () => {
        elAnchor.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }

    const scrollToView = (id) => {
        const yOffset = -80; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return(
        <div className="Work">
            <div className="Work_wrapper">
                <h2>Work</h2>

                <div className="Work_arrow-down" onClick={scrollTo}>
                    <img src={process.env.PUBLIC_URL + "/images/arrow-down.svg"} alt="Arrow down" />
                </div>
            </div>

            <div className="Work_wrapper" ref={elAnchor}>
                <div className="Work_flex Work_flex-reverse" onClick={() => {scrollToView('ironhack')}}>
                    <div className="Work_logo"><img src={process.env.PUBLIC_URL + "/images/logo-ironhack.png"} alt="Ironhack Logo" /></div>
                    <h3 className="Work_title">Projects @ Ironhack</h3>
                </div>

                <div className="Work_flex" onClick={() => {scrollToView('showroom')}}>
                    <div className="Work_logo"><img src={process.env.PUBLIC_URL + "/images/logo-pink.svg"} alt="Showroomprive Logo" /></div>
                    <h3 className="Work_title">Work @ Showroomprive.com</h3>
                </div>

                <div className="Work_flex Work_flex-reverse" onClick={() => {scrollToView('personal')}}>
                    <div className="Work_logo"><img src={process.env.PUBLIC_URL + "/images/logo-personal.svg"} alt="Personal Logo" /></div>
                    <h3 className="Work_title">Personal Projects</h3>
                </div>
            </div>

            <div id="ironhack" className="Work_ironhack">
                <div className="Work_logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo-ironhack.png"} alt="Ironhack Logo" />
                </div>

                <div className="ironhack_project">
                    <h3 className="project_title">Dream Catcher</h3>

                    <p className="project_text">Minimalistic game realised in JavaScript. You lose life points when you’re hit by a passing line. You have to avoid them controlling your player with your arrow keys and catch all the squares that are in the canvas.</p>

                    <a target="_blank" rel="noopener noreferrer" href="https://mathispnz.github.io/My-Game-Dream-Catcher/"><button className="Work_btn">Play</button></a>
                </div>

                <div className="ironhack_project">
                    <h3 className="project_title">Flowse</h3>

                    <p className="project_text">Music application realised with NodeJS library. You can login through Passport.js with your Spotify, Deezer or LastFM account. The backend selects your twenty top artists and you can generate five songs about your favourite genre from these top artists.</p>

                    {/* <a target="_blank" rel="noopener noreferrer" href="https://flowse.herokuapp.com/"><button className="Work_btn">Go</button></a> */}
                </div>

                <div className="ironhack_project">
                    <h3 className="project_title">Airbnb Clone</h3>

                    <p className="project_text">Full-Stack Web Application realised with ReactJS. Authentication, calendar,messaging, CRUD requests.</p>

                    {/* <a target="_blank" rel="noopener noreferrer" href="http://iron-airbnb.herokuapp.com/"><button className="Work_btn">Go</button></a> */}
                </div>
            </div>

            <div id="showroom" className="Work_showroom">
                <div className="showroom_logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo-srp.png"} alt="" />
                </div>

                <h3>HTML | CSS | JS</h3>

                <p className="project_text">Landing pages integration from Sketch or Photoshop appearing on 
                Showroomprive.com website and applications for several days during a sale. 
                100% complex responsive pages with sliders, fixed banners, animations.</p>

                <div className="showroom_landings">
                    <div className="showroom_landing-wrapper">
                        <div className={fullScreen ? "showroom_landing showroom_landing-full" : "showroom_landing"} onClick={() => {setFullScreen(!fullScreen)}}>
                            <img src={process.env.PUBLIC_URL + "/images/lp-1.png"} alt="" />
                        </div>
                    </div>
                    <div className="showroom_landing-wrapper">
                        <div className={fullScreen2 ? "showroom_landing showroom_landing-full" : "showroom_landing"} onClick={() => {setFullScreen2(!fullScreen2)}}>
                            <img src={process.env.PUBLIC_URL + "/images/lp-2.png"} alt="" />
                        </div>
                    </div>
                    <div className="showroom_landing-wrapper">
                        <div className={fullScreen3 ? "showroom_landing showroom_landing-full" : "showroom_landing"} onClick={() => {setFullScreen3(!fullScreen3)}}>
                            <img src={process.env.PUBLIC_URL + "/images/lp-3.png"} alt="" />
                        </div>
                    </div>
                    <div className="showroom_landing-wrapper">
                        <div className={fullScreen4 ? "showroom_landing showroom_landing-full" : "showroom_landing"} onClick={() => {setFullScreen4(!fullScreen4)}}>
                            <img src={process.env.PUBLIC_URL + "/images/lp-4.png"} alt="" />
                        </div>
                    </div>
                    <div className="showroom_landing-wrapper">
                        <div className={fullScreen5 ? "showroom_landing showroom_landing-full" : "showroom_landing"} onClick={() => {setFullScreen5(!fullScreen5)}}>
                            <img src={process.env.PUBLIC_URL + "/images/lp-5.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="personal" className="Work_personal">
                <div className="personal_logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo-personal.svg"} alt="" />
                </div>

                <div className="personal_project">
                    <h3 className="project_title">Amelie Peingnez Photography</h3>

                    <p className="project_text">Photography website created with ReactJS. Sliders showing photographs
                    in different themes. Admin authentication to add, edit, delete pictures from the
                    sliders.</p>

                    <a target="blank" rel="noopener noreferrer" href="https://ameliepeingnezphotography.herokuapp.com/"><button className="Work_btn">Go</button></a>
                </div>
            </div>
        </div>
    )
}
