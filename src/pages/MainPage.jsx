import React, { useEffect, useState } from "react";

import './MainPage.css'

import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import EducationSection from "../Components/EducationSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import FAB from "../elements/FAB";

export default function MainPage({stars}) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const s = (e) => {
            if(window.scrollY > window.innerHeight) {
                setIsScrolled(true)
            }else if(window.scrollY < window.innerHeight) {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', s);

        return () => {
            window.removeEventListener('scroll', s);
        }
    }, [])

    return(
        <div className="content-container">
            <HeroSection stars={stars}/>
            <AboutSection />
            <EducationSection />
            <ProjectSection />
            <ContactSection />
            {isScrolled && <FAB />}
            <Footer />
        </div>
    )
}