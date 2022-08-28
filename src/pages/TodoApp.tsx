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
import { Box, Button, Flash } from "@primer/react";
import '../App.css'

function TodoApp() {
  const navigate = useNavigate();
  const { isLogged, getLocalData } = useContext(TodoContext);
  getLocalData();
  return (
    <Box min-height={'100vh'} height={'100vh'} margin={'1rem 0.6rem'}>
      <Header emoji="🦸" />
      {!isLogged ? (
        <Box height={'100px'} margin={'4rem 0'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Flash variant={'warning'}>Você precisa estar logado</Flash>
          <Button size="large" onClick={() => navigate("/login")}>Login</Button>
        </Box>
      ) : (
        <Box>
          <Box>
            <ToastContainer theme="dark" position="top-center" />
            <TodoForm />
            <TodoList />
            <TodoCounter />
          </Box>
        </Box>
      )}
      <NavBar />
    </Box>
  );
}

export default TodoApp;
