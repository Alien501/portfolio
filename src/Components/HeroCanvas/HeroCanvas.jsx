import React, { useEffect } from "react";

import './HeroCanvas.css';

const HeroCanvas = () => {
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
            const posY = Math.floor(Math.random() * heroCanvas.height);
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
                particle.x += Math.cos(particle.angle) * 0.2;
    
                if(deltaX !== 0) particle.velocityX = deltaX * .01;
    
                particle.x += particle.velocityX;
                particle.velocityX *= .95;
    
                if (particle.x > heroCanvas.width + particle.radius) {
                    particle.x = -particle.radius;
                } else if (particle.x < -particle.radius) {
                    particle.x = heroCanvas.width + particle.radius;
                }
    
                heroContext.beginPath();
                heroContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                heroContext.fill();
            });
            requestAnimationFrame(animateParticles);
        };
    
        animateParticles();
        drawParticles();
    
        const changeParticleX = (event) => {
            const x = event.pageX;
            if (prevX !== null) {
                deltaX = x - prevX;
            }
            prevX = x;
        }
    
        heroCanvas.addEventListener('mousemove', changeParticleX);
    
        return () => {
            heroCanvas.removeEventListener('mousemove', changeParticleX);
        }
    }, []);
    

    return <canvas className="hero-canvas"></canvas>
}

export default HeroCanvas;