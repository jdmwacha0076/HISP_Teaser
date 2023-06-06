import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (request) => {
      
        request.preventDefault();
        if (value) {
          

          addTodo(value);
          
          setValue('');
        }
      };
  return (

    <form
    onSubmit={handleSubmit} 
    className="TodoForm">
    <input type="text"
    className="input"
    value={value} 
    onChange={(request) => setValue(request.target.value)} 
    />

    <button 
    type="submit" 
    style={{
      display:"flex",
      justifyItems:"center",
      alignItems:"center"
    }}>Submit Activity</button>
  </form>
  )
}
