import React, { useRef } from "react";

import './EducationCard.css'

export default function EducationCard({eduOrg, marks, year}) {
    const bRef = useRef();

    const markCard = marks.map((mark) => 
        <div key={mark['exam_title']} className="mark-container">
            <div className="mark-head">{mark['exam_title'] + ' - ' + mark['exam_mark']}</div>
        </div>
    )


    function onMouseLeave(event) {
        bRef.current = null;
    }

    function onMouseEnter(event) {
        bRef.current = event.currentTarget.getBoundingClientRect();   
    }
    
    function onMouseMove(event) {
        if(!bRef.current) return;
        const x = event.clientX - bRef.current.left;
        const y = event.clientY - bRef.current.top;
        const xPercentage = x / bRef.current.width;
        const yPercentage = y / bRef.current.height;

        const xRotation = (xPercentage - 0.5) * 30;
        const yRotation = (0.5 - yPercentage) * 30;
        
        event.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`)
        event.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`)
    }

    return(
        <div ref={bRef} className="education-card" onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="org-name">
                <span>Name: </span>{eduOrg}
            </div>
            <div className="year-pass"><span>Year Of Passing: </span>{year}</div>
            <div className="mark-outer-container">
                <span>Marks: </span>
                {markCard}
            </div>
        </div>
    )
}