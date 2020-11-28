import React from 'react';
import '../styles/About.scss';

export default function About() {
    return(
        <div className="About">
            <h2 className="About_title"><i>About me</i></h2>

            <div className="About_content">
                <div className="About_portrait">
                    <img src="/images/profile-pic.jpg" alt="Portrait" />
                </div>

                <div className="About_wrapper_text">
                    <p className="About_text">Hey !<br /> <br />

                    I’m Mathis, 24 years old and I’m a Web Developer 👨🏼‍💻<br /> <br />

                    After studying cinema and audiovisual in Paris, I decided to do a Web Development Bootcamp where I’ve learned both front and back-end development with languages like HTML5, CSS/SCSS, Javascript, NodeJS and React.<br /> <br />

                    I’m currently working as a Web Developer @ Showroomprive.com which is one of the biggest e-commerce website in France. Working in the advertising part of the company gives me the opportunity to work for big brands like Starbucks, Kiehl’s, Springfield, Urban Decay… 
                    It really is a blast having a first experience as a Front-end Web Developer working with such brands !<br /> <br />

                    What I like about web development and programming in general is that it’s constantly moving and changing, I feel like I'd never get bored about it. I'm happy when I realise clean and good-looking things and I'm always curious & eager to learn&nbsp;!<br /> <br />

                    I hope we’ll do something great together, don’t hesitate to contact me 👋🏻</p>
                </div>
            </div>
        </div>
    )
}