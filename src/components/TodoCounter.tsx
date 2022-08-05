import React from "react";
import "../App.css";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoCounter() {
  const { todos } = useContext(TodoContext);
  const completedListCounter = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="counter">
      <h6>Tarefas: {todos.length} </h6>
      <h6>Tarefas completas: {completedListCounter}</h6>
    </div>
  );
}

export default TodoCounter;
