import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './style.css'

function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const onChangeInput = (event) => {
        setTodo(event.target.value)
    }

    const addTodo = () => {
        if (!todo) {
            alert('Please enter a todo')
            return
        }
        setTodos([...todos, todo])
        setTodo('')
    }

    const onDelete = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Todo App</h1>
            <div className='w-75 ms-auto me-auto'>
                <div className='d-flex'>
                    <input
                        type='text'
                        placeholder='Todo'
                        onChange={onChangeInput}
                        value={todo}
                    />
                    <button className='btn btn-primary ms-4' onClick={addTodo}>
                        Add
                    </button>
                </div>
                <ul className='list-group mt-4'>
                    {todos.map((todo, index) => (
                        <li
                            className='list-group-item d-flex justify-content-between align-items-center'
                            key={index}
                        >
                            <p className='m-0'>{todo}</p>
                            <button
                                className='btn btn-danger'
                                onClick={() => {
                                    onDelete(index)
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
