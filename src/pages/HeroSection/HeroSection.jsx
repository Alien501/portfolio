import React, { useEffect, useState, useLayoutEffect, useRef} from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

import SplitType from "split-type";


import song1 from '../../assets/song1.mp3'
import song2 from '../../assets/song2.mp3'
import song3 from '../../assets/song3.mp3'

import './HeroSection.css'

import myboy from '../../assets/austronaut.webp'
import earth from '../../assets/earth.svg';

export default function HeroSection({stars}){
    const songList = [song1, song2, song3];
    const [currentSong, setCurrentSong] = useState(0);
    const heroAudioElement = useRef(null);
    const hero = useRef();

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
    
    async function roateAustronaut() {
        const aus = document.querySelector('.hero-aus');
        const audioElementHero = document.querySelector('.hero-audio');

        const audioPromise = audioElementHero.play();

        if(audioPromise !== undefined) {
            audioPromise.then(() => {
                console.log('Do you hear anything');
            }).catch((error) => {
                console.log(`Hello, I'm the error ${error}`);
            })
        }

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
    }

    useEffect(() => {
        const heroAudio = heroAudioElement.current;

        const onHeroEnd = () => {
            setCurrentSong(prev => (prev + 1) % 3);
            console.log('Updated song!');
        }

        if(heroAudio) {
            heroAudio.addEventListener('ended', onHeroEnd);
        }

        return () => {
            if(heroAudio) 
                heroAudio.removeEventListener('ended', onHeroEnd);
        }
    })

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

    // Canvas Animation
    useEffect(() => {
        const heroCanvas = document.querySelector('.hero-canvas');
        const heroContext = heroCanvas.getContext('2d');
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
        const colors = ['#A775F9', '#762AEF', '#5209C7'];
        let prevX = null;
        let deltaX = 0;
        
        let particles = [];
        for(let i = 0; i < 100; i++) {
            const radius = Math.floor(Math.random() * 1.5) + 0.5;
            const speed = Math.random() * 1.5 + .5;
            const posX = Math.floor(Math.random() * heroCanvas.width);
            const posY = heroCanvas.height + Math.floor(Math.random() * heroCanvas.height);
            const color = Math.floor(Math.random() * 3);
    
            particles.push({
                color: color,
                x: posX,
                y: posY,
                radius: radius,
                speed: speed,
                angle: Math.random() * Math.PI * 2,
                velocityX: 0
            });
        }
    
        const drawParticles = () => {
            particles.forEach(particle => {
                heroContext.fillStyle = colors[particle.color];
                heroContext.beginPath();
                heroContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                heroContext.fill();
            });
        };
    
        const animateParticles = () => {
            heroContext.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            particles.forEach(particle => {
                particle.angle += 0.02;
                particle.x += Math.cos(particle.angle) * 0.5;
                particle.y -= particle.speed;

                if(deltaX !== 0) particle.velocityX = deltaX * .01;

                particle.x += particle.velocityX;

                particle.velocityX *= .95;

                if (particle.y < -particle.radius) {
                    particle.y = heroCanvas.height + particle.radius;
                    particle.x = Math.floor(Math.random() * heroCanvas.width);
                }
    
                heroContext.beginPath();
                heroContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                heroContext.fill();
            });
    
            requestAnimationFrame(animateParticles);
        };
    
        animateParticles();
        drawParticles();

        const changeParticleX = () => {
            const x = event.pageX;
            deltaX = x - prevX;
            prevX = x;
            console.log(deltaX);
        }

        heroCanvas.addEventListener('mousemove', changeParticleX);

        return () => {
            heroCanvas.removeEventListener('mousemove', changeParticleX);
        }
    });
    

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
                    <img src={myboy} onClick={roateAustronaut} alt="Austronaut illustration" className="hero-aus" />
                </div>
            </div>
            <img src={earth} alt="Earth" className="earth" />
            <canvas className="hero-canvas"></canvas>
            {/* {stars} */}
            <audio ref={heroAudioElement} src={songList[currentSong]} className="hero-audio"></audio>
        </div>
    )
}