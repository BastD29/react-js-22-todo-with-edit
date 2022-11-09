import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <div className='todo-list'>
      {
        todos.map(todo => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            name={todo.name}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      }
    </ div>
  )
}
