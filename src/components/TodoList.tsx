import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

function TodoList({ todos, completeTodo }: { todos: Todo[], completeTodo: (index: number) => void }) {
  return (
    <div data-testid="todo-list" className="todo-list">{
    todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          // icon={todo.icon}
          completeTodo={completeTodo}
        />
        ))
    }
</div>
    );
};

export default TodoList;