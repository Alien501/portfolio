import React, { useLayoutEffect, useRef } from "react";

import './HeroSection.css'
import SoCalledEarth from '../assets/planet earth.svg'

export default function HeroSection(){

    return(
        <div id="hero-section">
            <div className="hero-text-container">
                <div className="text-top">
                    Hi 👋, I'm <span>Vignesh</span>
                </div>
                <div className="text-bottom">
                I like making fun,interactive things with code.
                </div>
            </div>

            <div className="hero-image-container">
                <img  src={SoCalledEarth} alt="Earth illustration" className="hero-image" />
            </div>
        </div>
    )
}