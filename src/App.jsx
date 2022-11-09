import React from 'react';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import DATA from "./data/data";
import { nanoid } from "nanoid";
import { useState } from 'react';

export default function App() {

  // READ

  const [todos, setTodos] = useState(DATA);

  // CREATE

  const addTodo = (name) => {
    const newTodo = {
      id: nanoid(),
      name: name,
      completed: false
    }
    // if (name){
    //   setTodos([...todos, newTodo])
    // }
    // return;
    
    if (!name) return
    setTodos([...todos, newTodo])
  }

  // DELETE

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => id !== todo.id);
    setTodos(filteredTodos);
  }

  // UPDATE

  const editTodo = (id, newName) => {
    const editedTodo = todos.map((todo) => {
      if (id === todo.id){
        return {
          ...todo,
          name: newName
        }
      }
      return todo;
    })
    setTodos(editedTodo)
  }

  return (
    <>
      <Form 
        addTodo={addTodo} // CREATE
      />
      {/* <hr /> */}
      <TodoList 
        todos={todos} // READ
        deleteTodo={deleteTodo} // DELETE
        editTodo={editTodo} // UPDATE
      />
    </>
  )
}
