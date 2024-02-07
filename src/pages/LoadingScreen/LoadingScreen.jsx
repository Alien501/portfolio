import React, { useLayoutEffect } from "react";
import RokcetImg from '../../assets/rocket.svg'

import { useRef, useEffect } from "react";
import gsap from "gsap";

import './LoadingScreen.css'

export default function LoadingScreen({stars}) {
    const container = useRef();

    useLayoutEffect(() => {
        gsap.fromTo('.rocket', {
            bottom: '-20%',
        }, {
            transform: 'translate3d(0, -50vh, 0)',
            duration: 4,
            repeat: 0,
        })
    })

    useLayoutEffect(() => {
        gsap.to('.rocket',{
            rotateZ: '0.5deg',
            duration: .1,
            rotationZ: '-0.5deg',
            yoyo: true,
            repeat: -1
        })
    })

    
    useLayoutEffect(() => {
        const contexts = [];

            for (let i = 0; i < stars.length; i++) {
                let ctx = gsap.context(
                    () => {
                        gsap.fromTo(`.star${i}`,
                        {
                            opacity: 0.3
                        }
                        ,{
                            opacity: 0.9,
                            duration: 0.8,
                            delay: Math.random()*2,
                            yoyo: true,
                            repeat: -1
                        });
                    });
                contexts.push(ctx)
            };

            return () => {
                contexts.forEach((ctx) => ctx.revert());
            }

    })

    useEffect(() => {
        const p = document.getElementById('rect');
        p.setAttribute('x', '0%');
    }, [])

    useLayoutEffect(() => {
        const contexts = [];
        
        for (let i = 0; i < stars.length; i++) {
            const x = Math.random() * (window.innerWidth - 10);
            const y = -Math.random() * window.innerHeight;
            gsap.set(`.star${i}`, { x, y });

            let ctx = gsap.context(() => {
                gsap.fromTo(`.star${i}`,
                {

                }
                , {
                    y: window.innerHeight + 10,
                    duration: 15,
                    delay: Math.random() * 35,
                    ease: 'none',
                    onComplete: () => {
                        gsap.set(`.star${i}`, { y: -10 });
                    },
                    repeat: -1,
                });
            });
            contexts.push(ctx);
        }
        return () => {
            contexts.forEach((ctx) => ctx.revert());
        };
    });

    return(
        <div ref={container} className="loading-page-container">
            <img src={RokcetImg} alt="Rocket" className="rocket" />
            {stars}
            <div className="loading-text">
                <svg className="load-text"  width="150px" textRendering='geometricPrecision' shapeRendering='geometricPrecision'>
                    <pattern  id="pattern1" patternUnits="userSpaceOnUse" height="102.4" width="100%">
                        <rect x="0" y="0" height="100%" width="0%" fill="hsl(216, 100%, 83%)"></rect>
                        <rect style={{
                        transition: 'x 12s ease'
                    }} id="rect" x="-100%" y="0" height="100%" width="100%" fill="hsl(216, 100%, 83%)"></rect>
                    </pattern>
                    <text x="0" y="50%" fill="url(#pattern1)" className="load-main-text" dominantBaseline='middle'>
                        Loading...
                    </text>
                </svg>
            </div>
        </div>
    )
}