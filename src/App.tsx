import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import notify from "./utils/notify";
import { ToastContainer } from 'react-toastify';
import { Todo } from "./types";
import { TodoContextProvider } from "./context/TodoContext";

function App() {

  const saveTodo = (index: number, text: string | number | readonly string[] | undefined) => {
    const newTodos = [...todos] as Todo[];
    newTodos[index].isEditing = false;
    newTodos[index].text = text;
    setTodos(newTodos as any);
  };

  const editTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    newTodos[index].isEditing = true;
    setTodos(newTodos as any);
  };

  const [todos, setTodos] = useState([]);

  return (
    <TodoContextProvider>
    <div className="app">
      <Header/>
      <ToastContainer
        theme="dark"
        position="top-center"
      />
      <TodoForm/>
      <TodoList editTodo={editTodo} saveTodo={saveTodo}/>
      <TodoCounter/>
    </div>
    </TodoContextProvider>
  );
}

export default App;