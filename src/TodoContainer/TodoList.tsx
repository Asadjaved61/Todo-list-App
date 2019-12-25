import React from 'react';
import Todo from './Todo';

import './TodoContainer.css';
import TodoListProps from '../Interfaces/TodoListProps.interface';
import TodoValue from '../Interfaces/TodoValue.interface';

const TodoList: React.FC<TodoListProps> = ({ todos, updateTodoStatus, removeTodo }) => {
    return (
        <ul className = "todo-list">
            {todos.map((todo: TodoValue, index: number) => {
                return (
                    <Todo 
                        key= {index}
                        todo= {todo}
                        index= {index}
                        updateTodoStatus= {updateTodoStatus}
                        removeTodo= {removeTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;
