import React from "react";

import './TechCard.css';

export default function TechCard({name, icon}) {
    return(
        <div className="tech-stack-card-container">
            <div className="tech-image-container">
                {icon}
            </div>
            <div className="tech-name-container">
                {name}
            </div>
        </div>
    )
}