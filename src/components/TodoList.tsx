import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { Box, Select } from "@primer/react";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const [selectedPrior, setSelectedPrior] = React.useState([
    "high",
    "normal",
    "low",
    "",
  ] as string[]);

  const filterTodos = (todos: any[]) => {
    const newTodos = todos.filter((todo) =>
      selectedPrior.includes(todo.priority)
    );
    return newTodos;
  };
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    const newValue = event.target.value as string;
    if (newValue.includes("all")) {
      setSelectedPrior(["high", "normal", "low", ""] as string[]);
    } else {
      setSelectedPrior(newValue.split(",") as string[]);
    }
  };
  return (
    <Box display={["flex"]} flexDirection={"column"} alignItems={"center"}>
      <Box display={'flex'} flexDirection={'column'} marginTop={'30px'} marginBottom={'30px'} justifyContent={'center'} width={'320px'}>
          <Select
            className="filter-selector"
            onChange={handleChange}
            title="selectFilter"
          >
            <Select.Option value="all" selected>
              Todas
            </Select.Option>
            <Select.Option value="low">Baixa Prioridade 🟢</Select.Option>
            <Select.Option value="normal">Normais 🔹</Select.Option>
            <Select.Option value="high">Importantes 🔺</Select.Option>
          </Select>
          <Box marginTop={'30px'}>
        {filterTodos(todos).map((todo, key) => (
          <TodoItem key={key} index={todo.index} todo={todo} />
        ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TodoList;
