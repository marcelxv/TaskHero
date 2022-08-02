import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

function TodoList({ todos, completeTodo }: { todos: Todo[], completeTodo: (index: number) => void }) {
  return (
    <div data-testid="todo-list" className="todo-list">{
    todos.map((todo) => (
        <TodoItem
          key={todo.index}
          index={todo.index}
          todo={todo}
          completeTodo={completeTodo}
        />
        ))
    }
</div>
    );
};

export default TodoList;