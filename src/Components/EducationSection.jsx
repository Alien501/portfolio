import React from "react";

import './EducationSection.css'
import EducationCard from "../elements/EducationCard";

export default function EducationSection(){

    return(
        <div id="education-section">
            <div data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out" className="education-heading">Education</div>

            <div className="education-detail-container">
                <EducationCard
                    eduOrg={'Velammal Residential School, Ladanendal'}
                    marks={[
                        {'exam_title': '10th', 'exam_mark': '94%'}, {'exam_title': '12th', 'exam_mark': '95%'}
                    ]}
                    year={2022}
                />
                <EducationCard
                    eduOrg={'Rajalakshmi Engineering College, Chennai'}
                    marks={[
                        {'exam_title': 'CGPA*', 'exam_mark': '8.61'},
                    ]}
                    year={2026}
                />
            </div>
        </div>
    )
}