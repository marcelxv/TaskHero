import React, { useState } from "react";
import { Todo } from "../types";

function TodoItem({ todo, index, completeTodo, editTodo, saveTodo, removeTodo }: {todo: Todo, index: number, completeTodo: (index:
number) => void, editTodo: (index: number) => void, saveTodo: (index: number, text: string | number | readonly string[]
| undefined) => void, removeTodo : (index: number) => void}) {
const isCompleted = () => {
if (todo.isCompleted) {
return "🔙";
}
return "✅";
}
const [value, setValue] = useState(todo.text);

const isChecked = () => {
return { textDecoration: todo.isCompleted ? "line-through" : "none" }
}
return (
<div className={!todo.isEditing ? 'todo' : 'todo-edit'} style={isChecked()}>
  {todo.isEditing ? (
  <div className="form-edit">
    <form onSubmit={e=> {
      e.preventDefault();
      saveTodo(index, value);
      } } />
      <input type="text" className="input-edit" value={value} onChange={e=> setValue(e.target.value)} />
  </div>
  ) : (
  <span>
    {todo.text}
  </span>
  )}
  <div>
    {todo.isEditing ? (
    <button className="btn-check" onClick={()=> saveTodo(index, value)}>👍🏻</button>
    ) : (
    <button className="btn-check" onClick={()=> editTodo(index)}>✏️</button>
    )}
    {todo.isEditing ? null : (
    <>
    <button className="btn-check" onClick={()=> completeTodo(index)}>{isCompleted()}</button>
    <button className="btn-check" onClick={()=> removeTodo(index)}>✖️`</button>
    </>
    )}
  </div>
</div>
)
}
export default TodoItem;