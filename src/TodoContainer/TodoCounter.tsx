import React from 'react'

const TodoCounter = ({ todoCount }: any) => {
    return (
        <span className="todo-counter">
            { todoCount }
        </span>
    )
}

export default TodoCounter;
