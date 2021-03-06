import React, { useState } from 'react';
import TodoFormProps from '../Interfaces/TodoForm.interface';

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // on submit button click add new todo
      if (!value) return;

      addTodo(value);
      setValue('')
    };
  
    return (
      <form className="add-todo-form center-element" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input add-todo-input"
          placeholder="Add todo..."
          value={value}
          name="addTodo"
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-submit">Add</button>
      </form>
    );
  }

  export default TodoForm;