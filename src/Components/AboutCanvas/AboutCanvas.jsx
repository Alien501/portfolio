import React, {useEffect} from "react";

import './AboutCanvas.css';

const AboutCanvas = () => {
    useEffect(() => {
        const myCanvas = document.querySelector('.about-canvas');

        const context = myCanvas.getContext('2d');
        myCanvas.width = myCanvas.offsetWidth;
        myCanvas.height = myCanvas.offsetHeight;
        let stars = [];
        const colors1 = ['#7970FF', '#EFEDFF', '#5209C7'];
        
        for (let i = 0; i < 100; i++) {
            const color = Math.floor(Math.random() * 3);
            const radius = Math.floor(Math.random() * 2);
            const speed = Math.random() * 5;
            const direction = Math.random() * Math.PI * 2;
    
            stars.push({
                x: myCanvas.width/2,
                y: myCanvas.height/2,
                color: color,
                radius: radius,
                speed: speed,
                direction: direction
            })
        }

        const drawOnScreen = () => {
            stars.forEach(star => {
                context.fillStyle = colors1[star.color];
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI*2)
                context.fill()
            })
        }
        
        function animateStars() {
            context.clearRect(0, 0, myCanvas.width, myCanvas.height);
            stars.forEach(star => {
                star.x += star.speed * Math.cos(star.direction);
                star.y += star.speed * Math.sin(star.direction);
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fill();
    
                if (star.x > myCanvas.width || star.x < 0) {
                    star.x = myCanvas.width/2;
                    star.y = (myCanvas.height)/2;
                }
                if (star.y > myCanvas.height || star.y < 0) {
                    star.x = myCanvas.width/2;
                    star.y = (myCanvas.height)/2;
                }
            });

            requestAnimationFrame(animateStars)
        }

        animateStars();

        drawOnScreen();
    }, [])

    return <canvas className="about-canvas"></canvas>
};

export default AboutCanvas;