interface TodoCont {
    addTodo: (text: String) => void,
    moveDoneTaskAtBottom: () => void,
    updateTodoStatus: (index: any) => void,
    removeTodo: (index: any) => void
}

export default TodoCont;