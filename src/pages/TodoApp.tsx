import React from "react";
import "../App.css";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoCounter from "../components/TodoCounter";
import NavBar from '../components/NavBar'
import { ToastContainer } from "react-toastify";
import TodoContext from '../context/TodoContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

function TodoApp() {
  const navigate = useNavigate();
  const { isLogged } = useContext(TodoContext);  

  return (
    <>
        <Header emoji='🦸' />
        {!isLogged ? 
        <>
        <h1>Você precisa estar logado</h1>
        <button onClick={() => {navigate('/login')}}>Entrar aqui</button>
        </> : (
    <>
    <>
      <ToastContainer theme="dark" position="top-center" />
      <TodoForm />
      <TodoList />
      <TodoCounter />
    </>
    </>
        )}
            <NavBar/>
    </>
  );
}

export default TodoApp;
