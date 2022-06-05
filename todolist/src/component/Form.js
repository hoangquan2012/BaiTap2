import React, { useState } from 'react';


function Form(props) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(name);
    setName('');
  }
  
  const handleChange = (e) => {
    setName(e.target.value)
    console.log("typing")
  }
    

  return (
    <form onSubmit={handleSubmit} >
      <h1>TodoList</h1>
      <input type="text" name="todo" className="input input-lg" value={name} onChange={handleChange} />
      <button type="submit" className="btn btn-dark btn-lg mt-3 mb-3" >
        Add
      </button>
    </form>
  )
}

export default Form;