import React from "react";

function TodoItem({ todo, index, completeTodo }) {
  const isCompleted = () => {
    if (todo.isCompleted) {
      return true
    }
    return false
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
        <button disabled={ isCompleted() } className="btn-check" onClick={() => completeTodo(index)}>{todo.icon}</button>
      </div>
    </div>
        )
}
export default TodoItem;
