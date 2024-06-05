import React, { useEffect } from "react";

import './HeroCanvas.css';

const HeroCanvas = () => {
    useEffect(() => {
        console.log('Hello');
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
        }

        heroCanvas.addEventListener('mousemove', changeParticleX);

        return () => {
            heroCanvas.removeEventListener('mousemove', changeParticleX);
        }
    }, []);

    return <canvas className="hero-canvas"></canvas>
}

export default HeroCanvas;