import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import './AboutSection.css'
import Rover from '../assets/rover.svg';
import Resume from '../assets/Resume (1).pdf'

export default function AboutSection() {
    const hero = useRef();

    const bg = document.querySelector('#about-section')
    useEffect( () => {
        if(!hero.current) return;
        const updateMousePosition = (e) => {
            const { clientX, clientY } = e;
            hero.current.style.setProperty('--x', `${clientX}px`);
            hero.current.style.setProperty('--y', `${clientY}px`);
        }

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    useLayoutEffect(() => {
        let ctx = gsap.context(
            () => {
                gsap.fromTo(
                    '.rover',
                    {
                        transform: 'translate3d(-39vw, 0, 0)'
                    },{
                        transform: 'translate3d(40vw, 0, 0)',
                        duration: 10,
                        repeat: -1,
                        yoyo: true,
                        ease: 'back.inOut',
                        onComplete: () => {
                            gsap.set('.rover', {rotationY: 180})
                        }
                    }
                )
            }
        )
        return () => ctx.revert();
    })

    return(
        <div ref={hero} id="about-section">
                <div className="about-container">
                 <img src={Rover} className="rover" alt="" />
                    <h1  data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out" >About</h1>
                    <p>
                        A skilled web developer proficient in <b>Python, C, Java, JavaScript, HTML, CSS, NodeJs</b> and <b>React.js</b>. With a strong foundation in <b>Django, SQL</b> and <b>Git</b>. Certified in <b>Software Testing</b> and <b>Python</b>, I bring a commitment to quality and innovation. My expertise extends to MongoDB, and I am well-versed in tools like <b>VS Code, Figma</b> and <b>Adobe suite</b>.
                    </p>
                    <a href={Resume} target="_" className="resume">Resume</a>
                </div>
        </div>
    )
}