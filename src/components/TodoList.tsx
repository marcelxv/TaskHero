import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList({ editTodo, saveTodo}: { editTodo: (index: number) => void, saveTodo: (index: number, text: string | number | readonly string[] | undefined) => void}) {
  const { todos } = useContext(TodoContext);
  return (
    <div data-testid="todo-list" className="todo-list">{
    todos.map((todo, key) => (
        <TodoItem
          key={key}
          index={key}
          todo={todo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
        ))
    }
</div>
    );
};

export default TodoList;