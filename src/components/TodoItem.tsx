import React from "react";
import { Todo } from "../types";

function TodoItem({ todo, index, completeTodo }: {todo: Todo, index: number, completeTodo: (index: number) => void}) {
  const isCompleted = () => {
    if (todo.isCompleted) {
      return "✅";
     }
    return "⏳";
   }

  const isChecked = () => {
    return { textDecoration: todo.isCompleted ? "line-through" : "none" }
  }
    return (
        <div className="todo"
    style={isChecked()}
    >
      {todo.text}
      <div>
        <button className="btn-check" onClick={() => completeTodo(index)}>{isCompleted()}</button>
      </div>
    </div>
        )
}
export default TodoItem;
