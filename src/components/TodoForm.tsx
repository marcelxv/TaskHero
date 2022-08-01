import React from "react";
import { useState } from "react";

function TodoForm({addTodo}: {addTodo: (text: string) => void}) {
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
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button disabled={value ? false : true } onClick={handleSubmit} data-testid="add-task-button" className="btn" type="button">Adicionar</button>
      </form>
      
    );
  }
    export default TodoForm;