import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import './ProjectSection.css'
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

import lrcImage2 from '../../assets/lrc_get_portrait.webp'
import port2 from '../../assets/this_portrait.png'
import syncPlay from '../../assets/sync-play.png'
import devsWeb from '../../assets/devs_web.webp'
import devsComp from '../../assets/devs_comp.webp'
import thirukural from '../../assets/thirukural.webp'

export default function ProjectSection() {

    useGSAP(() => {
        const projectCards = document.querySelectorAll('.project-card-container');

        gsap.fromTo(
            projectCards,
            {
                bottom: '-100px',
            },
            {
                bottom: '0',
                duration: .8,
                stagger: .5,
                scrollTrigger: '#project-section',
                ease: 'none'
            }
        )
    })

    return(
        <div id="project-section">
            <div id="project-head">Projects</div>
            <div className="project-container">
                <ProjectCard
                    project_title={'LRC Get'}
                    project_link={'https://lrc-get-new.vercel.app/'}
                    git_link={'https://github.com/Alien501/LRC-Get'}
                    project_desc={'This website provides a convenient platform to retrieve both synchronized and non-synchronized lyrics for songs from diverse sources.'}
                    project_image={[lrcImage2]}
                    project_id={'p-1'}
                />

                <ProjectCard
                    project_title={'Portfolio'}
                    project_link={'https://portfolio-git-main-alien501.vercel.app/'}
                    git_link={'https://github.com/Alien501/portfolio'}
                    project_desc={'My personal portfolio website, The one currently you are in :-).'}
                    project_image={[port2]}
                    project_id={'p-2'}
                />

                <ProjectCard
                    project_title={'Sync Play'}
                    project_link={'https://sync-play-nu.vercel.app/signin'}
                    git_link={'https://github.com/Alien501/sync-play-template'}
                    project_desc={'A simple site made to upload offline music playlist to Spotify with ease.[Note: Still under beta and not available for mass. Maybe soon :-)]'}
                    project_image={[syncPlay]}
                    project_id={'p-3'}
                />

                <ProjectCard
                    project_title={'DEVS REC Website'}
                    project_link={'https://devsrec.club/'}
                    git_link={''}
                    project_desc={'A website I made for my college\'s techincal club, DEVS. This is currently serving as their current website.'}
                    project_image={[devsWeb]}
                    project_id={'p-4'}
                />
                <ProjectCard
                    project_title={'REC Companion'}
                    project_link={'https://comp.devsrec.club/'}
                    git_link={'https://github.com/DevsREC/rec_comapnion'}
                    project_desc={'A PWA collabratively made under DEVS for ease access of various functionalities present and offered my college.'}
                    project_image={[devsComp]}
                    project_id={'p-5'}
                />
                <ProjectCard
                    project_title={'Thirrukural'}
                    project_link={'https://thirukural-uetr.vercel.app/'}
                    git_link={'https://github.com/Alien501/thirukural'}
                    project_desc={'The Thirukural API & Frontend project is a web application designed to make the Thirukural accessible to all. Using Node.js, Express.js, React, NextUI, and Tailwind CSS, it provides a comprehensive API and a user-friendly interface to explore this ancient Tamil literary work.'}
                    project_image={[thirukural]}
                    project_id={'p-6'}
                />
            </div>
        </div>
    )
}