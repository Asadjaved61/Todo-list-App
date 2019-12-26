import React, {useState} from 'react'

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoValue from '../Interfaces/TodoValue.interface';
import TodoCounter from './TodoCounter';

const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<TodoValue[]>([
        { text: 'Go to gym', isCompleted: false }
    ]);
    
    const addTodo = (text: String) => {
        const newTodos: any = [...todos, { text, isCompleted: false }];

        setTodos(newTodos);
    }

    const todoCount = () => {
        let count = 0;

        todos.forEach(todo => {
            if (!todo.isCompleted) {
                count += 1
            }
        })

        return count;
    }

    const moveDoneTaskAtBottom = () => {
        const newTodos: TodoValue[] = [...todos];

        newTodos.forEach((todo: TodoValue, index: number) => {
            if (todo.isCompleted) {
                newTodos.push(newTodos.splice(index, 1)[0])
            } else {
                newTodos.unshift(newTodos.splice(index, 1)[0])
            }
        })

        setTodos(newTodos)
    }

    const updateTodoStatus = (index: any) => {
        const newTodos: TodoValue[] = [...todos];

        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);

        moveDoneTaskAtBottom()
    }

    const removeTodo = (index: any) => {
        const newTodos: TodoValue[] = [...todos];
        newTodos.splice(index, 1);

        setTodos(newTodos);
    }
    return (
        <div className="todo-list-container center-element">
            <TodoCounter todoCount= {todoCount()}/>
            <TodoForm addTodo= {addTodo}/>
            <TodoList 
                todos= {todos}
                updateTodoStatus= {updateTodoStatus}
                removeTodo= {removeTodo}
            />
        </div>
    )
}

export default TodoContainer;
