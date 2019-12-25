import TodoValue from "./TodoValue.interface";

interface TodoProps {
    key: number,
    todo: TodoValue,
    index: number,
    updateTodoStatus: (index: number) => void,
    removeTodo: (index: number) => void
}

export default TodoProps;