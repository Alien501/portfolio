import React, { useState } from "react";

import './ProjectCard.css'

export default function ProjectCard({project_title, project_link, git_link, project_desc, project_image}) {
    const [isCardClicked, setIsCardClicked] = useState(false);

    function onCardClick() {
        setIsCardClicked(prev => !prev);
    }

    return(
        <div className="project-card-container" onClick={onCardClick}>
            <div className="project-image-container project-content">
                <img src={project_image[1]} alt="Project Image" className="project-image" />
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
                    <a href={git_link != ''? git_link: '#project-section'} className="project-btn git-btn" target="_new">Github</a>
                    <a href={project_link != ''? project_link: '#project-section'} className="project-btn site-btn" target="_new">Live Site</a>
                </div>
            </div>

        </div>
    )
}