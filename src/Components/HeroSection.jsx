import React, { useLayoutEffect, useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import './HeroSection.css'
import SoCalledEarth from '../assets/planet earth.svg'
// import Satellite from '../assets/sat 2.svg'

export default function HeroSection({stars}){
    // const sat = useRef();


    // useGSAP(() => {
    //     gsap.fromTo('.satelite-image', {
    //         transform: 'translate3d(-80vw, 45%, 0)',
    //     }, {
    //         transform: 'translate3d(100vw, -250px, 0)',
    //         rotate: 180,
    //         duration: 15,
    //         repeat: -1,
    //         ease: 'power3.inOut'
    //     })
    // }, {scope: sat});

    useLayoutEffect(() => {
        const contexts = [];

        setTimeout(
            () => {
                for (let i = 0; i < stars.length; i++) {
                    let ctx = gsap.context(
                        () => {
                            gsap.fromTo(`.star${i}`,
                            {

                            }
                            ,{
                                opacity: 0.9,
                                duration: 0.8,
                                opacity: 0.3,
                                delay: Math.random()*2,
                                yoyo: true,
                                repeat: -1
                            });
                        });
                    contexts.push(ctx)
                };
            }, 1000);

            return () => {
                contexts.forEach((ctx) => ctx.revert());
            }

    })


    return(
        <div id="hero-section">
            <div className="hero-text-container">
                <div className="text-top">
                    Hi 👋, I'm <span>Vignesh</span>
                </div>
                <div className="text-bottom">
                I like making fun,interactive things with code.
                </div>
            </div>

            <div className="hero-image-container">
                <img  src={SoCalledEarth} alt="Earth illustration" className="hero-image" />
            </div>

            {/* <div className="sta-image-container">
                <img  src={Satellite} alt="Satellite Illustration" className="satelite-image" />
            </div> */}
            {
                stars
            }
        </div>
    )
}