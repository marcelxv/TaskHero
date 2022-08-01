import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import notify from "./utils/notify";
import { ToastContainer } from 'react-toastify';
import { Todo } from "./types";

function App() {

  const completeTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    if (newTodos[index].isCompleted) {
      newTodos[index].isCompleted = false;
      setTodos(newTodos as any);
      notify("Tarefa marcada como incompleta", "info");
    } else {
      newTodos[index].isCompleted = true;
      setTodos(newTodos as any);
      notify("Tarefa concluída", "success");
    }
  };

  const addTodo = (text: string) => {
    const cleanInput = text.toLowerCase().trim();
    const isInvalid = cleanInput.length === 0 || cleanInput.trim() === "";
    if (isInvalid) {
      notify("Digite algo!", "error");
    } else {
    const newTodos = [...todos] as Todo[];
    const isDuplicated = newTodos.some(todo => todo.cleanInput === cleanInput);
    if (isDuplicated) {
      notify("Tarefa já existe", "error");
    } else {
      newTodos.push({
        text,
        isCompleted: false,
        icon: "⏳",
        cleanInput: cleanInput.trim(),
      });
    setTodos(newTodos as any);
    };
  }};
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <Header/>
      <ToastContainer
        theme="dark"
        position="top-center"
      />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
      <TodoCounter todos={todos} />
    </div>
  );
}

export default App;