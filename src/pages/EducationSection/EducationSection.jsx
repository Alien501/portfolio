import React from "react";

import './EducationSection.css'

import EdexCard from "../../Components/EdexCard/EdexCard";

import School from '../../assets/school.png';
import College from '../../assets/College.png';

export default function EducationSection() {
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