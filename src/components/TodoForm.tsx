import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
    const { addTodo } = useContext(TodoContext);
    const [value, setValue] = useState("");
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder={`Adicionar tarefa`}
          type="text"
          className="input-form"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button disabled={value ? false : true } data-testid="add-task-button" className="btn" type="submit">Adicionar</button>
      </form>
      
    );
  }
    export default TodoForm;