import React from 'react'
import { useState } from 'react';

export default function Form({ addTodo }) {

    const [name, setName] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(name);
        setName("");
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <form
            className='todo-form'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name='text'
                value={name}
                onChange={handleChange}
            />
            <button type='submit'>
                Add
            </button>

        </form>
    )
}
