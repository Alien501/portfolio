import React from "react";

import './ProjectSection.css'
import ProjectCard from "../elements/ProjectCard";

import lrcImage1 from '../assets/lrc_get_land.png'
import lrcImage2 from '../assets/lrc_get_portrait.png'

import port1 from '../assets/this_land.png'
import port2 from '../assets/this_portrait.png'

export default function ProjectSection() {
    return(
        <div id="project-section">
            <div id="project-head">Projects</div>
            <div className="project-container">
                <ProjectCard
                    project_title={'LRC Get'}
                    project_link={'https://lrc-get.vercel.app/'}
                    git_link={''}
                    project_desc={'This website provides a convenient platform to retrieve both synchronized and non-synchronized lyrics for songs from diverse sources.'}
                    project_image={[lrcImage1, lrcImage2]}
                />

                <ProjectCard
                    project_title={'Portfolio'}
                    project_link={'https://portfolio-git-main-alien501.vercel.app/#hero-section'}
                    git_link={''}
                    project_desc={'My personal portfolio website, The one currently you are in :-).'}
                    project_image={[port1, port2]}
                />
            </div>
        </div>
    )
}