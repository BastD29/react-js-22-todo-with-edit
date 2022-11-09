import React from 'react'
import { useState } from 'react'

export default function TodoItem({ name, id, deleteTodo, editTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, newName);
    setNewName("");
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const viewTemplate = (
    <div className='todo-item'>
      <p>{name}</p>
      <div className='btn-group'>
        <button
          type='button'
          // onClick={() => editTodo(id)}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          type='button'
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  )

  const editingTemplate = (
    <form 
      onSubmit={handleSubmit}
    >
      <label>New name: </label>
      <br></br>
      <input
        id={id}
        type="text"
        value={newName}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <div className='btn-group'>
        <button
          type='button'
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
        <button
          // type='button'
          // onClick={() => setNewName(newName)}
          type='submit'
        >
          Save
        </button>
      </div>
    </form>
  )

  // return editingTemplate
  // return viewTemplate
  return (
    <>
      <hr />
      {isEditing ? editingTemplate : viewTemplate}
    </>
  )
}
