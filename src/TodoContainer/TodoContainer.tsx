import React, { Component } from 'react'

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoValue from '../Interfaces/TodoValue.interface';
import TodoCounter from './TodoCounter';
import TodoCont from '../Interfaces/TodoContainer.interface';

class TodoContainer extends Component<{}, { todos: TodoValue[] }> implements TodoCont {
    constructor(props: any) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem("todoList") as string) || []
        }
    }

    componentDidUpdate = () => {
        localStorage.setItem('todoList', JSON.stringify(this.state.todos))
    }
    
    addTodo = (text: String) => {
        // get existing todos copy and add new todo at the end of array
        const newTodos: any[] = [...this.state.todos, { text, isCompleted: false }];

        this.setState({ todos: newTodos })
    }

    moveDoneTaskAtBottom = () => {
        const newTodos: TodoValue[] = [...this.state.todos];
        
        // move done todos at the bottom by pushing them
        newTodos.forEach((todo: TodoValue, index: number) => {
            if (todo.isCompleted) {
                newTodos.push(newTodos.splice(index, 1)[0])
            }
        })

        this.setState({ todos: newTodos })
    }

    updateTodoStatus = (index: number) => {
        const newTodos: TodoValue[] = [...this.state.todos];

        // toggle todo and mark it as done or undone
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        this.setState({ todos: newTodos });

        this.moveDoneTaskAtBottom()
    }

    removeTodo = (index: any) => {
        // remove selected todo
        const newTodos: TodoValue[] = [...this.state.todos];
        newTodos.splice(index, 1);

        this.setState({ todos: newTodos });
    }

    todoCount = () => {
        // update number of todos
        let count = 0;

        this.state.todos.forEach((todo: TodoValue) => {
            if (!todo.isCompleted) {
                count += 1
            }
        })

        return count;
    }

    render() {
        return (
            <div className="todo-list-container center-element">
                <TodoCounter todoCount= {this.todoCount()}/>
                <TodoForm addTodo= {this.addTodo}/>
                <TodoList 
                    todos= {this.state.todos}
                    updateTodoStatus= {this.updateTodoStatus}
                    removeTodo= {this.removeTodo}
                />
            </div>
        )
    }
}

export default TodoContainer;
