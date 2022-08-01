import React from "react";

function TodoItem({ todo, index, completeTodo }) {
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
