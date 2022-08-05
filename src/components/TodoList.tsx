import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <div data-testid="todo-list" className="todo-list">{
    todos.map((todo, key) => (
        <TodoItem
          key={key}
          index={key}
          todo={todo}
        />
        ))
    }
</div>
    );
};

export default TodoList;