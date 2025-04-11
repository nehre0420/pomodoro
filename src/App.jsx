
import './App.css';
import img1 from'./images/menu.png';
import React, { useState, useEffect, useRef } from 'react';


function App() {
  {/**desine */}
  const[edit, setedit] = useState(false);
  const[addtask, setaddtsk] = useState(false)
  const[removetask , setremovetask] = useState(true)
  {/**desine */}
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
        
        <div style={{ display: removetask ? 'flex': 'none'}} className="input-task" onClick={()=>setaddtsk(!addtask) & setremovetask(!removetask) }>
          Add task

        </div>
        <p>✅ Pomodoros completed: {completedPomodoros}</p>

         {/**task bar */}
         <div className='task-bar'>
          <ul>
            <li><p>task 1</p>
            <img  onClick={() =>setedit(!edit)} src={img1} alt="" /></li>
          </ul>
         


        </div>
         {/**task bar end */}
        {/* tasks input start*/}
        <div className="tasks-input" style={{ display: addtask ? 'flex': 'none'}}>

          <input className='task' type="text" placeholder="add task" />
          <input className='number' type="number" placeholder="task" />
          <div className='botom-tasks-input'>
            <ul> 
              <button className='cansel'>cansel</button>
              <button onClick={()=>setremovetask(!removetask)& setaddtsk(!addtask)} className='save'>save</button></ul>
          </div>
        </div>
        {/**tasks input end*/}
        {/**task edit start */}
        <div className="tasks-edit" style={{ display: edit ? 'flex': 'none'}}>

          <input className='task' type="text" placeholder="add task" />
          <input className='number' type="number" placeholder="task" />



          <div className='botom-tasks-edit'>
            <ul> 
            <button className='delete'>delete</button>
              <button className='cansel'>cansel</button>
              <button onClick={() =>setedit(!edit)} className='save'>save</button></ul>
          </div>
        </div>


        {/**task edit end */}
      </div>
    </div>
  )
}

export default App
