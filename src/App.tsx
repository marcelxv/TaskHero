import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import { ToastContainer } from 'react-toastify';
import { TodoContextProvider } from "./context/TodoContext";

function App() {

  return (
    <TodoContextProvider>
    <div className="app">
      <Header/>
      <ToastContainer
        theme="dark"
        position="top-center"
      />
      <TodoForm/>
      <TodoList/>
      <TodoCounter/>
    </div>
    </TodoContextProvider>
  );
}

export default App;