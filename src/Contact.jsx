import React from 'react';
import './App.css';
import { IoMdMail, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

function Contact() {
    const handleEmailClick = () => {
        window.location.href = "mailto:ryuunosukegotou0@gmail.com";
    };

    const handleTwitterClick = () => {
        window.open("https://twitter.com/eight_999_q", '_blank');
    };

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/%E3%82%8A%E3%82%85%E3%81%86%E3%81%AE%E3%81%99%E3%81%91-%E3%81%94%E3%81%A8%E3%81%86-19702130b/", '_blank'); // 新しいタブで開く
    };

    return (
        <div className="contact-info">
            <p><IoMdMail /> Email: ryuunosukegotou0@gmail.com</p>
            <p onClick={handleTwitterClick}><IoLogoTwitter /> Twitter: @eight_999_q</p>
            <p onClick={handleLinkedInClick}><IoLogoLinkedin /> LinkedIn: Ryu</p>
        </div>
    );
}

export default Contact;
