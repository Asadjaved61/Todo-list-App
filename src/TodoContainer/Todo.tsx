import React, { useState } from 'react'
import TodoProps from '../Interfaces/TodoProps.interface';

const Todo: React.FC<TodoProps> = ({ todo, index, updateTodoStatus, removeTodo }) => {
    const [ edit, toggleEdit ] = useState<boolean>(false);

    const updateTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
        // update todo text by gettign input value
        todo.text = e.target.value
    }

    return (
        <li className="todo center-element" style={{ background: todo.isCompleted ? '#ccc' : 'white' }}>
            { edit ? 
                <input type="text" 
                    defaultValue={todo.text} 
                    className="input input-todoText"
                    name="todoText" 
                    onChange={updateTodoText} autoFocus/> : 
                <span 
                    className="todo-text" 
                    style={{ textDecoration: todo.isCompleted ? 'line-through': '' }}>{todo.text}
                </span> }
            <button className="btn close-btn" onClick={() => removeTodo(index)}>X</button>
            <button className="btn mark-complete-btn" onClick={ () => updateTodoStatus(index)}>
                { todo.isCompleted ? "Undone" : "Done" }
            </button>
            <button
                    className="btn edit-btn"
                    style={{ display: todo.isCompleted ? "none" : "inline" }} 
                    onClick={() => toggleEdit(!edit)}>
                { edit ? "Save" : "Edit" }
            </button>
        </li>
    )
}

export default Todo;