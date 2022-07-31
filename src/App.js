import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import notify from "./utils/notify";
import { ToastContainer } from 'react-toastify';

function App() {
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    newTodos[index].icon = "✅";
    setTodos(newTodos);
    notify("Tarefa concluída", "success");
  };

  const addTodo = text => {
    const newTodos = [...todos, { text, icon : "🔘"}];
    setTodos(newTodos);
  }
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="app">
      <Header/>
      <ToastContainer
        theme="dark"
        position="top-center"
      />
      <TodoForm addTodo={addTodo} todos={todos} />
      <TodoList todos={todos} completeTodo={completeTodo} />
      <TodoCounter todos={todos} />
    </div>
  );
}

export default App;