import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './pages/LoadingScreen'

function App() {
  const [stars, setStars] = useState([]);
    
  useEffect(() => {
      function addStars() {
        const newStars = [];
  
        for (let index = 0; index < 75; index++) {
          const x = Math.random() * (window.innerWidth - 10);
          const y = Math.random() * (window.innerHeight - 10);
          const size = Math.floor(Math.random()*6);
          const z = Math.random([-1, 1, 2, 10, 6]);
          const star = (
            <div
              key={index}
              className={`star star${index}`}
              style={{ transform: `translate(${x}px, ${y}px)`, width: `${size}px`, height: `${size}px`, zIndex: z}}
            ></div>
          );
  
          newStars.push(star);
        }
  
        setStars(newStars);
      }
  
      addStars();
    }, []);

  return (
    <>
      <LoadingScreen stars={stars}/>
    </>
  )
}

export default App
