import React, {useState} from 'react'


export const Editform = ({editTodo, task}) => {

  const handleSubmit = (request) => {
    request.preventDefault();
    editTodo(value, task.id);
  };

    const [value, setValue] = useState(task.task);
    
  return (
    <form onSubmit={handleSubmit} className="width">

    <input 
    type="text" value={value} 
    onChange={(request) => setValue(request.target.value)} 
    className="input" 
    placeholder='Update task' />

    <button 
    type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
