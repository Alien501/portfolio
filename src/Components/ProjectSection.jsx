import React from "react";

import './ProjectSection.css'
import ProjectCard from "../elements/ProjectCard";

import lrcImage2 from '../assets/lrc_get_portrait.png'
import port2 from '../assets/this_portrait.png'

export default function ProjectSection() {
    return(
        <div id="project-section">
            <div data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out" id="project-head">Projects</div>
            <div className="project-container">
                <ProjectCard
                    project_title={'LRC Get'}
                    project_link={'https://lrc-get.vercel.app/'}
                    git_link={'https://github.com/Alien501/lrc-get-public'}
                    project_desc={'This website provides a convenient platform to retrieve both synchronized and non-synchronized lyrics for songs from diverse sources.'}
                    project_image={[lrcImage2]}
                />

                <ProjectCard
                    project_title={'Portfolio'}
                    project_link={'https://portfolio-git-main-alien501.vercel.app/'}
                    git_link={'https://github.com/Alien501/portfolio'}
                    project_desc={'My personal portfolio website, The one currently you are in :-).'}
                    project_image={[port2]}
                />
            </div>
        </div>
    )
}