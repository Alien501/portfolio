import React, { useEffect, useLayoutEffect, useRef} from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

import SplitType from "split-type";

import './HeroSection.css'
import SoCalledEarth from '../../assets/planet earth.svg'
import Satellite from '../../assets/sat 2.svg'

import myboy from '../../assets/austronaut.webp'
import earth from '../../assets/earth.svg';

export default function HeroSection({stars}){
    const hero = useRef();
    // Todo
    // useLayoutEffect(() => {
    //     const contexts = [];
    //     setTimeout(
    //         () => {
    //             for (let i = 0; i < stars.length; i++) {
    //                 const x = Math.random() * (window.innerWidth - 10);
    //                 const y = Math.random() * (window.innerHeight - 10);
    //                 let ctx = gsap.context(
    //                     () => {
    //                         gsap.fromTo(`.star${i}`,
    //                         {
    //                             opacity: 0.3,
    //                             x: x,
    //                             y: y-600
    //                         }
    //                         ,{
    //                             opacity: 0.9,
    //                             duration: 0.8,
    //                             delay: Math.random()*2,
    //                             yoyo: true,
    //                             repeat: -1
    //                         });
    //                     });
    //                 contexts.push(ctx)
    //             };
    //         }, 1000);
    //         console.log('Running');
    //         return () => {
    //             contexts.forEach((ctx) => ctx.revert());
    //         }
    // });

    // Austronaut Animation

    function austronautFloat(aus) {
        gsap.fromTo(
            aus,
            {
                bottom: '22%'
            },
            {
                bottom: '18%',
                duration: 1,
                ease: 'none',
                repeat: -1,
                yoyo: true
            }
        )
    }

    function roateAustronaut() {
        const aus = document.querySelector('.hero-aus');
        const context = gsap.context(() => {
            gsap.to(
                aus,
                {
                    rotate: 360,
                    duration: 2,
                    ease: 'elastic.inOut',
                    onComplete: () => {
                        context.revert()
                    }
                }
            )
        })

        // return () => {
        //     context.revert();
        // }
    }

    // Erth animaton on scroll
    useGSAP(() => {
        const earth = document.querySelector('.earth');
        function something() {
            gsap.to(
                earth,
                {
                    bottom: `${Math.round(window.scrollY - earth.clientTop) - 200}px`,
                    duration: 1
                }
            )
        }

        window.addEventListener('scroll', something)
    })

    useGSAP(() => {
        const aus = document.querySelector('.hero-aus');
    
        const ausTimeline = gsap.timeline();
    
        ausTimeline.fromTo(
            aus,
            {
                bottom: '-120%'
            },
            {
                bottom: '22%',
                ease: 'elastic.out',
                duration: 5,
                onComplete: () => {
                    austronautFloat(aus);
                }
            }
        )
    })

    // Intro text animation
    useGSAP(() => {
        const hi = document.querySelector('.hero-intro-hi');
        const im = document.querySelector('.hero-intro-im');
        const nm = document.querySelector('.hero-intro-nm');

        const tag = document.querySelector('.hero-section-tag-container');
        const splitTag = new SplitType(tag, {types: 'words,chars'})

        const tl = gsap.timeline({duration: .8, ease: "elastic.out"});

        tl.fromTo(
            hi,
            {
                transform: 'translate3d(0, 220%, 0)'
            },
            {
                transform: 'translate3d(0, 0, 0)'
            }
        ).fromTo(
            im,
            {
                transform: 'translate3d(0, -220%, 0)'
            },
            {
                transform: 'translate3d(0, 0, 0)'
            }
        ).fromTo(
            nm,
            {
                transform: 'translate3d(0, 220%, 0)'
            },
            {
                transform: 'translate3d(0, 0, 0)'
            }
        ).fromTo(
            splitTag.words,
            {
                opacity: 0,
                color: 'var(--color-text-normal)'
            },
            {
                color: '#fff',
                opacity: 1,
                stagger: .3
            }
        )
    })

    // Earth animation
    useGSAP(() => {
        gsap.to(
            '.earth',
            {
                rotate: 360,
                repeat: -1,
                ease: 'linear',
                duration: 20
            }
        )
    })

    return(
        <div ref={hero} id="hero-section">
            <div className="hero-section-left-container">
                <div className="hero-section-intro-text-container">
                    <span className="hero-section-text hero-intro-hi">
                        Hi 👋,
                    </span>
                    <span className="hero-section-text hero-intro-im">
                        I'm
                    </span>
                    <span className="hero-section-text hero-intro-nm">
                        Vignesh
                    </span>
                </div>
                <div className="hero-section-tag-container">
                    I like making fun 🎊, interactive 🧩 things with code.
                </div>
            </div>
            <div className="hero-section-right-container">
                <div className="hero-aus-image-container">
                    <img onClick={roateAustronaut} src={myboy} alt="Austronaut illustration" className="hero-aus" />
                </div>
            </div>
            <img src={earth} alt="Earth" className="earth" />
            {stars}
        </div>
    )
}