import { useState, useLayoutEffect } from 'react'
import { Analytics } from '@vercel/analytics/react';

import './App.css'
import LoadingScreen from './pages/LoadingScreen/LoadingScreen'
import MainPage from './pages/MainPage/MainPage';
import Header from './Components/Header/Header'

function App() {
  const [stars, setStars] = useState([]);
  const [isLoading, setIsloading] = useState(true);
    
  useLayoutEffect(() => {
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

    setTimeout(
      () => {
        setIsloading(false)
      },
      12111
    )
  return (
    <>
      {(isLoading)? <div style={
        {
          width: '100%',
          overflow: 'hidden'
        }
      } className="load-cont">
        <LoadingScreen stars={stars}/>
      </div>
      :
      <div className='cont-cont'>
        <Header />
        <MainPage stars={stars.slice(0, 15)}/>
      </div >}
      <Analytics />
    </>
  )
}

export default App
