

import './App.css';

import React, { useState, useEffect, useRef } from 'react';


function App() {
  
  {/**timer */}
   const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);



  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false); // stop the timer
            setCompletedPomodoros((count) => count + 1); // ✅ increment
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(timerRef.current);
  }, [isRunning]);
  

  const toggleTimer = () => setIsRunning((prev) => !prev);
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };
  {/**timer end */}

  return (
    <div className='page'>
        
      <div className='porodoro-box'>
        {/*timer start */}

        <div className='porodoro'>


          <div className="timer">
            <div className='catagry'>
              <ul>
                <li onClick={()=>setTimeLeft(25 * 60)}>pomodoro</li>
                <li onClick={() => setTimeLeft(5 * 60)}>Short brack</li>
                <li onClick={() => setTimeLeft(15 * 60)}>long brack</li>
              </ul>
            </div>

            <div className="time">

              <h1>{formatTime(timeLeft)}</h1>
            </div>
            <button  onClick={toggleTimer} >{isRunning ? 'Pause' : 'Start'} </button>
            <button onClick={resetTimer}>Reset</button>
          </div>
          {/*timer end */}

        </div>
        
        
      </div>
    </div>
  )
}

export default App
