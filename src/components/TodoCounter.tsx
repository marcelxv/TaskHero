import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { ProgressBar, Box } from "@primer/react";

function TodoCounter() {
  const { todos } = useContext(TodoContext);
  const completedListCounter = todos.filter((todo) => todo.isCompleted).length;
  return (
    <Box display={["flex"]} flexDirection={"column"} alignItems={"center"}>
    <Box display={["flex"]} flexDirection={"row"} alignItems={"center"} width={'320px'} justifyContent={'space-between'}>
      <h6>Tarefas: {todos.length} </h6>
      <ProgressBar 
        progress={completedListCounter / todos.length * 100}
        inline sx={{width: '100px'}} />
      <h6>Tarefas completas: {completedListCounter}</h6>
    </Box>
    </Box>
  );
}

export default TodoCounter;
