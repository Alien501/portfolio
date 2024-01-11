import React, { useState } from "react";

import './ProjectCard.css'

export default function ProjectCard({project_title, project_link, git_link, project_desc, project_image}) {
    const [isCardClicked, setIsCardClicked] = useState(false);

    function onCardClick() {
        setIsCardClicked(prev => !prev);
    }

    return(
        <div data-aos="fade-right" data-aos-duration="400" data-aos-easing="ease-in-out" className="project-card-container" onClick={onCardClick}>
            <div className="project-image-container project-content">
                <img src={project_image[0]} alt="Project Image" className="project-image" />
                <div className="project-title">
                    {project_title}
                </div>
            </div>

            <div>
                <div style={
                    {
                        transform: (isCardClicked)? 'translate3d(0, -470px, 0)': 'translate3d(0, 0px, 0)'
                    }
                } className="project-detail-container project-content">
                    <div className="project-description">
                        {project_desc}
                    </div>
                    {(git_link == '')?  <button href='#' className="project-btn git-btn" target="_new" disabled>Github</button>:  <a href={git_link} className="project-btn git-btn" target="_new">Github</a>}
                    {(project_link == '')?  <button href='#' className="project-btn site-btn" target="_new" disabled>Live Site</button>:  <a href={project_link} className="project-btn site-btn" target="_new">Live Site</a>}
                </div>
            </div>

        </div>
    )
}