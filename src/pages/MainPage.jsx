import React from "react";

import './MainPage.css'
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import EducationSection from "../Components/EducationSection";
import ProjectSection from "../Components/ProjectSection";

export default function MainPage({stars}) {
    return(
        <div className="content-container">
            <HeroSection stars={stars}/>
            <AboutSection />
            <EducationSection />
            <ProjectSection />
        </div>
    )
}