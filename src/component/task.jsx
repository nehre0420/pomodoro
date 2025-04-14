import './task.css';
import img1 from './images/menu.png';
import React, { useState } from 'react';

function Task() {
  const [edit, setEdit] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [editPomo, setEditPomo] = useState("");

  const [addtask, setAddTask] = useState(false);
  const [removetask, setRemoveTask] = useState(true);

  const [pomo, setPomo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleChange = (event) => setInputValue(event.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        number: pomo,
        completed: false
      };
      setSubmittedValues([...submittedValues, newTodo]);
      setInputValue("");
      setPomo("");
    }
  };

  const handleEditClick = (task) => {
    setEdit(true);
    setEditTaskId(task.id);
    setEditInput(task.text);
    setEditPomo(task.number);
  };

  const handleEditSave = () => {
    const updatedTasks = submittedValues.map(task => {
      if (task.id === editTaskId) {
        return { ...task, text: editInput, number: editPomo };
      }
      return task;
    });
    setSubmittedValues(updatedTasks);
    setEdit(false);
    setEditTaskId(null);
    setEditInput("");
    setEditPomo("");
  };

  const handleDelete = (id) => {
    const filtered = submittedValues.filter(task => task.id !== id);
    setSubmittedValues(filtered);
    setEdit(false);
  };

  return (
    <div className='page'>
      <div className='porodoro-box'>

        <div style={{ display: removetask ? 'flex' : 'none' }} className="input-task" onClick={() => {
          setAddTask(true);
          setRemoveTask(false);
        }}>
          Add task {pomo}
        </div>

        {/* Task List */}
        <div className='tasks'>
          <ul>
            {submittedValues.map((value) => (
              <li key={value.id}>
                <p>{value.text}</p>
                <span className='number-out'><p>{value.number}/4</p></span>
                <span className='menu-butn' onClick={() => handleEditClick(value)}><img src={img1} alt="edit" /></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Task Input */}
        <div className="tasks-input" style={{ display: addtask ? 'flex' : 'none' }}>
          <input className='task' type="text" placeholder="add task" value={inputValue} onChange={handleChange} />
          <input value={pomo} onChange={(e) => setPomo(e.target.value)} className='number' type="number" placeholder="task" />
          <div className='botom-tasks-input'>
            <ul>
              <button className='cansel' onClick={() => { setRemoveTask(true); setAddTask(false); }}>Cancel</button>
              <button className='save' onClick={() => { handleSubmit(); setRemoveTask(true); setAddTask(false); }}>Save</button>
            </ul>
          </div>
        </div>

        {/* Edit Task Input */}
        <div className="tasks-edit" style={{ display: edit ? 'flex' : 'none' }}>
          <input className='task' type="text" placeholder="edit task" value={editInput} onChange={(e) => setEditInput(e.target.value)} />
          <input className='number' type="number" placeholder="task" value={editPomo} onChange={(e) => setEditPomo(e.target.value)} />
          <div className='botom-tasks-edit'>
            <ul>
              <button className='delete' onClick={() => handleDelete(editTaskId)}>Delete</button>
              <button className='cansel' onClick={() => setEdit(false)}>Cancel</button>
              <button className='save' onClick={handleEditSave}>Save</button>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Task;
