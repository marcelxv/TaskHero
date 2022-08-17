import React from "react";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoCounter from "../components/TodoCounter";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@primer/react";
import '../App.css'

function TodoApp() {
  const navigate = useNavigate();
  const { isLogged } = useContext(TodoContext);

  return (
    <Box backgroundColor={'slateblue'} height={'100vh'} >
      <Header emoji="🦸" />
      {!isLogged ? (
        <>
          <h1>Você precisa estar logado</h1>
          <Button size="large" onClick={() => navigate("/login")}>Login</Button>
        </>
      ) : (
        <>
          <>
            <ToastContainer theme="dark" position="top-center" />
            <TodoForm />
            <TodoList />
            <TodoCounter />
          </>
        </>
      )}
      <NavBar />
    </Box>
  );
}

export default TodoApp;
