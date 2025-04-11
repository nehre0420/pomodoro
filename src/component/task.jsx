

import './task.css';



import React, { useState} from 'react';


function Task() {
   {/**desine */}
    const[edit, setedit] = useState(false);
    const[addtask, setaddtsk] = useState(false)
    const[removetask , setremovetask] = useState(true)
    {/**desine */}
  

  return (
    <div className='page'>
        
      <div className='porodoro-box'>
        {/*timer start */}

        
        
        <div style={{ display: removetask ? 'flex': 'none'}} className="input-task" onClick={()=>setaddtsk(!addtask) & setremovetask(!removetask) }>
          Add task

        </div>
        

         {/**task bar */}
         <div className='task-bar'>
          <ul>
            <li><p>task 1</p>
            <img  onClick={() =>setedit(!edit)} src={"jj"} alt="" /></li>
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

export default Task;
