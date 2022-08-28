import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { Box } from "@primer/react";

function TodoCalendar() {
  const { todos, persistTodos } = useContext(TodoContext);
  const validTodos = todos.filter((todo) => todo.date && !todo.isCompleted);
  persistTodos();
  return (
    <Box>
      <h1>TodoCalendar</h1>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {validTodos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.text}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

export default TodoCalendar;
