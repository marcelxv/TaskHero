import React from "react";
import notify from "../utils/notify";

function TodoForm({addTodo}) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
      if (value.length === 0 || value.trim() === "") {
        e.preventDefault();
        notify("Digite algo!", "error");
      } else {
      e.preventDefault();
      if (!value) return;
      addTodo(value.trim());
      setValue("");
      notify("Tarefa adicionada");
    }}
  
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