import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { taskHeroTheme } from "./theme/taskhero-theme";
import styled from 'styled-components';
import { TodoContextProvider } from "./context/TodoContext";

function App() {


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
    <TodoContextProvider>
    <ThemeProvider theme={taskHeroTheme}>
    <Wrapper>
      <Header />
          <ToastContainer theme="dark" position="top-center" />
          <TodoForm />
          <TodoList />
          <TodoCounter />
    </Wrapper>
    </ThemeProvider>
    </TodoContextProvider>    
  );
}
export default App;
