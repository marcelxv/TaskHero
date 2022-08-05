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

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
setIsModalOpen(true);
}

const isTooLong = (text: string) => {
if (text.length > 20 ) {
return (
  <>
  <span>{text.substring(0, 20)}</span>
  <button className="btn-check" onClick={openModal}>➕</button>
  </>
)
}
return text;
}




const isEditable = () => {
  if (!todo.isCompleted) {
    return ( 
    <button className="btn-check" onClick={()=> editTodo(index)}>✏️</button>
    );
  } else {
    return null
  }
};
const [value, setValue] = useState(todo.text);

return (
<div className={todoState()}>
  {todo.isEditing ? (
  <div className="form-edit">
    <form onSubmit={e=> {
      e.preventDefault();
      saveTodo(index, value);
      } } />
      <input title="edit-input" placeholder="" type="text" className="input-edit" value={value} onChange={e=> setValue(e.target.value)} />
  </div>
  ) : (
  <span className="todo-input">
    {isTooLong(todo.text as any)}
  </span>
  )}
  <div className="buttons">
    {todo.isEditing ? (
    <>
      <button className="btn-check" onClick={() => saveTodo(index, value)}>👍🏻</button>
      <button className="btn-check" onClick={() => {
        alert("Tem certeza que deseja cancelar?");
        setValue(todo.text);
        saveTodo(index, todo.text);
        } }>👎🏻</button>
    </>
    ) : (
      isEditable()
    )}
    {todo.isEditing ? null : (
    <>
    <button className="btn-check" onClick={()=> completeTodo(index)}>{isCompleted()}</button>
    <button className="btn-check" onClick={()=> removeTodo(index)}>✖️</button>
    </>
    )}
  </div>
  {isModalOpen ? (
  <div className="modal">
  <div className="modal-content">
    <span className="close" onClick={()=> setIsModalOpen(false)}>&times;</span>
    <p className="modal-text">{todo.text}</p>
    <button className="btn-check" onClick={()=> removeTodo(index)}>✖️</button>
    <button className="btn-check" onClick={()=> completeTodo(index)}>{isCompleted()}</button>

  </div>
</div>
  ) : null}
</div>
)

  function todoState(): string | undefined {
    if (todo.isEditing) {
    return 'todo-edit'
  } else if (todo.isCompleted && !todo.isEditing) {
    return 'todo-completed'
  } else {
    return 'todo'
  }
}
}
export default TodoItem;