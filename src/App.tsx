import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import notify from "./utils/notify";
import { ToastContainer } from 'react-toastify';
import { Todo } from "./types";
import { ThemeProvider } from 'styled-components';
import { taskHeroTheme } from "./theme/taskhero-theme";
import styled from 'styled-components';

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

  const removeTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    alert("Tem certeza que deseja remover?");
    newTodos.splice(index, 1);
    setTodos(newTodos as any);
    notify("Tarefa removida", "error");
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
        newText: "",
        isCompleted: false,
        icon: "⏳",
        cleanInput: cleanInput.trim(),
        index: newTodos.length,
        isEditing: false
      });
    setTodos(newTodos as any);
    };
  }};
  const [todos, setTodos] = useState([]);

  const Wrapper = styled.div`
    height: 100vh;
    max-width: 350px;
    margin: 0 auto;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSizes.small};
    padding: 1rem;
    background-color: ${props => props.theme.colors.primary};
  `;

  return (
    <ThemeProvider theme={taskHeroTheme}>
    <Wrapper>
      <Header/>
      <ToastContainer
        theme="dark"
        position="top-center"
      />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} editTodo={editTodo} saveTodo={saveTodo} removeTodo={removeTodo} />
      <TodoCounter todos={todos} />
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;