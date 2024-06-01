import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import './EducationSection.css'

import ausit from '../../assets/Ausit.svg'
import EdexCard from "../../Components/EdexCard/EdexCard";

import School from '../../assets/school.png';
import College from '../../assets/College.png';

// import EducationCard from "../../Components/EducationCard/EducationCard";

// export default function EducationSection(){
//     const bgPattern = useRef(null);

//     return(
//         <div id="education-section">
//             <div className="education-heading">Education</div>

//             <div className="education-detail-container">
//                 <EducationCard
//                     eduOrg={'Velammal Residential School, Ladanendal'}
//                     marks={[
//                         {'exam_title': '10th', 'exam_mark': '94%'}, {'exam_title': '12th', 'exam_mark': '95%'}
//                     ]}
//                     year={2022}
//                 />
//                 <EducationCard
//                     eduOrg={'Rajalakshmi Engineering College, Chennai'}
//                     marks={[
//                         {'exam_title': 'CGPA*', 'exam_mark': '8.33'},
//                     ]}
//                     year={2026}
//                 />
//             </div>
//             <div ref={bgPattern} className="background-pattern"></div>
//         </div>
//     )
// }

export default function EducationSection() {


    useGSAP(() => {
        const ausEdu = document.querySelector('.aus-edu');
        const eduTimeline = gsap.timeline();

        eduTimeline.fromTo(
            ausEdu,
            {
                x: '-100%',
                rotate: 65
            },
            {
                x: '0',
                duration: 4,
                ease: 'back.inOut'
            }
        )
    })

    return(
        <section id="education-section">
            <h1>EDU & EXP</h1>
            {/* <img src={ausit} className="aus-edu" /> */}

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