import React, { useEffect, useLayoutEffect, useRef } from "react";

import './AboutSection.css'
import Rover from '../../assets/rover.svg';
import Resume from '../../assets/Resume (1).pdf'

export default function AboutSection() {
    const hero = useRef(null);
    
    useEffect( () => {
    
        const bg = document.getElementById('about-section')
        if(!hero.current) return;
        const updateMousePosition = (e) => {
            const { clientX, clientY } = e;
            hero.current.style.setProperty('--x', `${clientX}px`);
            hero.current.style.setProperty('--y', `${clientY}px`);
        }

        bg.addEventListener('mousemove', updateMousePosition);

        return () => {
            bg.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    useEffect( () => {
        const rover = document.querySelector('.rover');
        const animateRover = (e) => {
            var scrollPercentage = -1*(window.scrollY / (rover.scrollHeight - window.innerHeight)) * 100;
            if(scrollPercentage >= 20 && scrollPercentage <= 86){
                rover.style.transform = `translate3d(${scrollPercentage-10}vw, 0, 0)`
            }
        } 

        window.addEventListener('scroll', animateRover);

        return () => {
            window.removeEventListener('scroll', animateRover);
        }
    }, [])

    return(
        <div ref={hero} id="about-section">
                <h1>About</h1>
                <img src={Rover} className="rover" />
                <div className="about-container">
                    <p>
                        A skilled web developer proficient in <b>Python, C, Java, JavaScript, HTML, CSS, NodeJs</b> and <b>React.js</b>. With a strong foundation in <b>Django, SQL</b> and <b>Git</b>. Certified in <b>Software Testing</b> and <b>Python</b>, I bring a commitment to quality and innovation. My expertise extends to MongoDB, and I am well-versed in tools like <b>VS Code, Figma</b> and <b>Adobe suite</b>.
                    </p>
                    <a href={Resume} target="_" className="resume">Resume</a>
                </div>
        </div>
    )
}