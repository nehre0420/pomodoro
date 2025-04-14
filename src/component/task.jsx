

import './task.css';
import img1 from './images/menu.png';
import React, { useState } from 'react';


function Task() {
  {/**desine */ }
  const [edit, setedit] = useState(false);
  const [addtask, setaddtsk] = useState(false)
  const [removetask, setremovetask] = useState(true)
  {/**desine */ }
  const [pomo , setpomo] = useState("")
  const [inputValue, setInputValue] = useState(""); // Stores current input
  const [submittedValues, setSubmittedValues] = useState([]); // Stores all submitted values

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("helo")
    if (inputValue.trim() !== "") { 
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        number: pomo,
        completed: false
      };
      setSubmittedValues([...submittedValues, newTodo]); // ✅ fixed
      setInputValue(""); // ✅ clear input
      setpomo("");       // ✅ optional: clear pomo field
      console.log("sahilww")
    }
  };
  


  return (
    <div className='page'>
      
      

      <div className='porodoro-box'>
        {/*timer start */}



        <div style={{ display: removetask ? 'flex' : 'none' }} className="input-task" onClick={() => setaddtsk(!addtask) & setremovetask(!removetask)}>
          Add task {pomo}

        </div>


        {/**task bar */}
        <div className='tasks'>
          <ul>
          {submittedValues.map((value, index) =>(
            <li key={index}><p>{value. text} </p><span className='number-out'><p>{value.number}</p></span> <span className='menu-butn' onClick={() => setedit(!edit)}><img src={img1}></img></span></li>
          
        ))}
        </ul>
      </div>
        {/**task bar end */}
        {/* tasks input start*/}
        <div className="tasks-input" style={{ display: addtask ? 'flex' : 'none' }}>

          <input className='task' type="text" placeholder="add task" value={inputValue}
        onChange={handleChange} />
          <input value={pomo} onChange={(e)=> setpomo(e.target.value) } className='number' type="number" placeholder="task" />
          <div className='botom-tasks-input'>
            <ul>
              <button onClick={()=> setremovetask(!removetask) & setaddtsk(!addtask) } className='cansel'>cansel</button>
              <button onClick={() => setremovetask(!removetask) & setaddtsk(!addtask) & handleSubmit() }className='save'>save</button></ul>
          </div>
        </div>
        {/**tasks input end*/}
        {/**task edit start */}
        <div className="tasks-edit" style={{ display: edit ? 'flex' : 'none' }}>

          <input  className='task' type="text" placeholder="add task" />
          <input  className='number' type="number" placeholder="task" />



          <div className='botom-tasks-edit'>
            <ul>
              <button className='delete'>delete</button>
              <button onClick={()=> setremovetask(!removetask) & setaddtsk(!addtask) } className='cansel'>cansel</button>
              <button onClick={() => setedit(!edit) & handleSubmit() } className='save'>save</button></ul>
          </div>
        </div> 


        {/**task edit end */}
    </div>
    </div >
  )
}

export default Task;