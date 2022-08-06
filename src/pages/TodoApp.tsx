import React from "react";
import "../App.css";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoCounter from "../components/TodoCounter";
import styled from "styled-components";
import NavBar from '../components/NavBar'
import { ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.primary};
  `;

function TodoApp() {
  return (
    <>
    <Wrapper>
      <Header emoji='🦸' />
      <ToastContainer theme="dark" position="top-center" />
      <TodoForm />
      <TodoList />
      <TodoCounter />
    </Wrapper>
    <NavBar/>
    </>
  );
}

export default TodoApp;
