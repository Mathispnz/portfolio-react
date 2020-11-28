import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Education.scss';

export default function Education() {
    return(
        <div className="Education">
            <h2 className="Education_title"><i>Education</i></h2>

            <div className="Education_wrap">
                <h4>2018</h4>

                <div className="Education_flex">
                    <div className="Education_content">
                        <h3>Web Development Bootcamp</h3>
                        <p>Full-time bootcamp to learn Full-Stack Web Development with HTML, CSS and Javascript. The bootcamp is organised in three modules and students have to realise a project for each module.</p>
                    </div>

                    <div className="Education_logo">
                        <img src={process.env.PUBLIC_URL + "/images/logo-ironhack.png"} alt="" />
                    </div>
                </div>

                <div className="Education_languages">
                    <div className="Education_language"><img src={process.env.PUBLIC_URL + "/images/html5.png"} alt="HTML5" /></div>
                    <div className="Education_language"><img src={process.env.PUBLIC_URL + "/images/css3.png"} alt="CSS3" /></div>
                    <div className="Education_language"><img src={process.env.PUBLIC_URL + "/images/js.png"} alt="JavaScript" /></div>
                    <div className="Education_language"><img src={process.env.PUBLIC_URL + "/images/nodejs.png"} alt="NodeJS" /></div>
                    <div className="Education_language"><img src={process.env.PUBLIC_URL + "/images/react.png"} alt="React" /></div>
                </div>
            </div>

            <div className="Education_wrap">
                <h4>2014-2018</h4>

                <div className="Education_flex">
                    <div className="Education_content">
                        <h3>Degree in Cinema and Audiovisual</h3>
                        <p>Theorical courses about cinema and audiovisual economics, analysis, production, history…</p>
                    </div>

                    <div className="Education_logo">
                        <img src={process.env.PUBLIC_URL + "/images/logo-sorbonne.png"} alt=""/>
                    </div>
                </div>
            </div>

            <Link to="/portfolio-react/work"><button className="Education_btnTo-work">
                <div className="Education_arrow-right">
                    <img src={process.env.PUBLIC_URL + "/images/arrow-work.svg"} alt="" />
                </div>
                <p><i>Work</i></p>
            </button></Link>
        </div>
    )
}