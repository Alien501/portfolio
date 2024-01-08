import React, { useState } from "react";

import Sat from '../assets/sat 1.svg'

import './Header.css'

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);

    function onClick() {
        setIsClicked(prev => !prev);
    }

    return(
        <nav className="header-container">
            <div className="filter-layer">

            </div>

            <div className="content-layer">
                <a href="#hero-section" className="header-name">
                    Alien501
                </a>
                <div className="header-icon-container" style={
                    {
                        transform: `${isClicked? 'rotate(175deg)': ''}`
                    }
                } onClick={onClick}>
                    <img className="icon-head" src={Sat} alt="Sattelite" />
                </div>
            </div>


            <div className={`header-menu-container ${isClicked? 'active': ''}`}>
                <div className="menu-container">
                    <a href="#hero-section" className="menu-item" onClick={onClick}>Home</a>
                    <a href="#about-section" className="menu-item" onClick={onClick}>About</a>
                    <a href="#" className="menu-item" onClick={onClick}>Education</a>
                    <a href="#" className="menu-item" onClick={onClick}>Projects</a>
                    <a href="#" className="menu-item" onClick={onClick}>Contact Me</a>
                </div>
            </div>
        </nav>
    )
}