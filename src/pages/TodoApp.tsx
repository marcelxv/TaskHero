import React from "react";
import "../App.css";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoCounter from "../components/TodoCounter";
import styled from "styled-components";
import NavBar from '../components/NavBar'
import { ToastContainer } from "react-toastify";
import TodoContext from '../context/TodoContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.primary};
  `;

  const Tag = styled.button`
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary}
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fontFamily};
    }
    &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    }
    &.selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    `;

function TodoApp() {
  const navigate = useNavigate();
  const { isLogged } = useContext(TodoContext);  

  return (
    <>
        <Header emoji='🦸' />
        {!isLogged ? 
        <>
        <h1>Você precisa estar logado</h1>
        <Tag onClick={() => {navigate('/login')}}>Entrar aqui</Tag>
        </> : (
    <>
    <Wrapper>
      <ToastContainer theme="dark" position="top-center" />
      <TodoForm />
      <TodoList />
      <TodoCounter />
    </Wrapper>
    </>
        )}
            <NavBar/>
    </>
  );
}

export default TodoApp;
