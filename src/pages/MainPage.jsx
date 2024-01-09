import React from "react";

import './MainPage.css'
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";

export default function MainPage({stars}) {
    return(
        <div className="content-container">
            <HeroSection stars={stars}/>
            <AboutSection />
            {/* <AboutSection /> */}
        </div>
    )
}