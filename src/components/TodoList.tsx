import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

function TodoList({ todos, completeTodo, editTodo, saveTodo, removeTodo}: { todos: Todo[], completeTodo: (index: number) => void, editTodo: (index: number) => void, saveTodo: (index: number, text: string | number | readonly string[] | undefined) => void, removeTodo: (index: number) => void }) {
  return (
    <div data-testid="todo-list" className="todo-list">{
    todos.map((todo, key) => (
        <TodoItem
          key={key}
          index={key}
          todo={todo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
          removeTodo={removeTodo}
        />
        ))
    }
</div>
    );
};

export default TodoList;