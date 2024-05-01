import React, { useEffect, useLayoutEffect, useRef } from "react";

import './AboutSection.css'
import Rover from '../../assets/rover.svg';
import Resume from '../../assets/Resume (1).pdf'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

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
                gsap.to(
                    rover, {
                        translateX: `${scrollPercentage-10}vw`,
                        duration: .1,
                        ease: 'linear'
                    }
                )
                // rover.style.transform = `translate3d(${scrollPercentage-10}vw, 0, 0)`
            }
        } 

        window.addEventListener('scroll', animateRover);

        return () => {
            window.removeEventListener('scroll', animateRover);
        }
    }, [])

    useGSAP(() => {
        const aboutChars = SplitType.create('.about-container p');
        const charsOne = aboutChars.chars;
        gsap.fromTo(
            charsOne,
            {
                opacity: 0,
                y: 10,
                x: 0
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                duration: .4,
                stagger: .04,
                ease: 'power1.inOut',
                scrollTrigger: charsOne
            }
        )

        gsap.fromTo(
            '.about-outer-cont',
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: .5,
                scrollTrigger: '.about-outer-cont'
            }
        )
    })

    return(
        <div ref={hero} id="about-section">
                <h1>About</h1>
                <img src={Rover} className="rover" />
                <div className="about-outer-cont">
                    <div className="square"></div>
                    <div className="about-container">
                        <p>
                            A skilled web developer proficient in <b>Python, C, Java, JavaScript, HTML, CSS, NodeJs </b>, and <b>React.js</b>. With a strong foundation in <b>Django, SQL</b> and <b>Git</b>. Certified in <b>Software Testing</b> and <b>Python</b>, I bring a commitment to quality and innovation. My expertise extends to <b>MongoDB </b> and I am well-versed in tools like <b>VS Code, Figma</b> and <b>Adobe suite</b>.
                        </p>
                        <a href={Resume} target="_" className="resume">
                            <span>
                                Resume
                            </span>
                        </a>
                    </div>
                </div>
        </div>
    )
}