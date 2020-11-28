import React from 'react';
import '../styles/Contact.scss';

export default function Contact() {
    return(
        <div className="Con">
            <h2 className="Con_title">Contact me</h2>

            <p className="Con_text">You can reach me via my <a href="mailto: mathis.peingnez@gmail.com">email address</a> !</p>

            {/* <div className="Con_wrapper">
                <div className="Con_flex">
                    <label>Name:</label>
                    <input type="text" className="Con_form-input" />
                </div>
                <div className="Con_flex">
                    <label>Email:</label>
                    <input type="text" className="Con_form-input" />
                </div>
                <div className="Con_flex">
                    <label>Message:</label>
                    <input className="Con_form-input Con_form-input_big" />
                </div>
                <button type="submit" className="Con_form-btn_send">Send</button>
            </div> */}
        </div>
    )
}