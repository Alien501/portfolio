import React, { useState } from "react";

import Sat from '../../assets/sat 1.svg'

import './Header.css'

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);
    const [hoveredText, setHoveredText] = useState(null);

    function onNavItemHovered(content) {
    setHoveredText(prev => content);
    }

    function onClick() {
        setIsClicked(prev => !prev);
    }

    return(
        <nav className="header-container" style={{
            backgroundColor: isClicked? 'var(--color-bg-dark, #010128)': 'var(--color-bg-dark-transparent)'
        }}>
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
                    <a onMouseLeave={() => setHoveredText('')} onTouchEnd={() => setHoveredText('')} onMouseEnter={() => setHoveredText('HOME')} onTouchStart={() => setHoveredText('HOME')} name="HOME" href="#hero-section" className="menu-item" onClick={onClick}>Home</a>
                    <a onMouseLeave={() => setHoveredText('')} onTouchEnd={() => setHoveredText('')} onMouseEnter={() => setHoveredText('ABOUT')} onTouchStart={() => setHoveredText('ABOUT')} name="ABOUT" href="#about-section" className="menu-item" onClick={onClick}>About</a>
                    <a onMouseLeave={() => setHoveredText('')} onTouchEnd={() => setHoveredText('')} onMouseEnter={() => setHoveredText('EDUCATION')} onTouchStart={() => setHoveredText('EDUCATION')} name="EDUCATION" href="#education-section" className="menu-item" onClick={onClick}>Education</a>
                    <a onMouseLeave={() => setHoveredText('')} onTouchEnd={() => setHoveredText('')} onMouseEnter={() => setHoveredText('PROJECTS')} onTouchStart={() => setHoveredText('PROJECTS')} name="PROJECTS" href="#project-section" className="menu-item" onClick={onClick}>Projects</a>
                    <a onMouseLeave={() => setHoveredText('')} onTouchEnd={() => setHoveredText('')} onMouseEnter={() => setHoveredText('CONTACT ME')} onTouchStart={() => setHoveredText('CONTACT ME')} name="CONTACT ME" href="#contact-section" className="menu-item" onClick={onClick}>Contact Me</a>
                </div>
                <div key={hoveredText} className="menu-hovered-content-container">
                    {hoveredText}
                </div>
            </div>
        </nav>
    )
}