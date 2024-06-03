import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import './EducationSection.css'

import EdexCard from "../../Components/EdexCard/EdexCard";

import School from '../../assets/school.png';
import College from '../../assets/College.png';

export default function EducationSection() {


    useGSAP(() => {
        const ausEdu = document.querySelector('.aus-edu');
        const eduTimeline = gsap.timeline();

        eduTimeline.fromTo(
            ausEdu,
            {
                x: '-100%',
                rotate: 65
            },
            {
                x: '0',
                duration: 4,
                ease: 'back.inOut'
            }
        )
    })

    return(
        <section id="education-section">
            <h1>EDU & EXP</h1>
            <div className="computer-screen-container">
                <div className="computer-screen">
                    <EdexCard
                        name={'school.txt'}
                        imgPath={School}
                    />
                    <EdexCard
                        name={'college.txt'}
                        imgPath={College}
                    />
                </div>
            </div>
        </section>
    )
}