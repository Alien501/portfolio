import React, { useEffect, useState } from "react";

import './ProjectCard.css'

import confettiSound from '../../assets/confetti.mp3'

import confetti from "canvas-confetti";

export default function ProjectCard({project_title, project_link, git_link, project_desc, project_image}) {
    const [isCardClicked, setIsCardClicked] = useState(false);
    var end = 10;
    
    var colors = ['#0091ff', '#fffff', '#01013c', '#130d5fc2'];

    
    function onCardClick() {
        const audioElement = document.querySelector('.project-audio');
        setIsCardClicked(prev => !prev);
        if(!isCardClicked){
            audioElement.play();
        (function frame() {
            confetti({
                particleCount: 20,
                angle: 60,
                spread: 45,
                origin: { x: 0, y: 1 },
                colors: colors
            });
            confetti({
                particleCount: 20,
                angle: 120,
                spread: 45,
                origin: { x: 1, y: 1 },
                colors: colors
            });
            confetti({
                origin: {
                    y: 1
                },
                spread: 90,
                particleCount: 30
            })
    
            if (0 < end--) {
                requestAnimationFrame(frame);
            }
        }());
    }

    }


    return(
        <div className="project-card-container" onClick={onCardClick}>
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
            <audio preload="true" className="project-audio" src={confettiSound}></audio>
        </div>
    )
}