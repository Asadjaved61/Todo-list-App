import TodoValue from "./TodoValue.interface";

interface TodoListProps {
    todos: TodoValue[]
    updateTodoStatus: (index: any) => void
    removeTodo: (index: any) => void
}

export default TodoListProps;