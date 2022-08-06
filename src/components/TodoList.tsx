import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const [selectedPrior, setSelectedPrior] = React.useState(['high', 'normal', 'low', ''] as string[]);

  const filterTodos = (todos: any[]) => {
    const newTodos = todos.filter((todo) => selectedPrior.includes(todo.priority));
    return newTodos
  }
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    const newValue = event.target.value as string;
    if (newValue.includes('all')) {
      setSelectedPrior(['high', 'normal', 'low', ''] as string[]);
    }
    else {
      setSelectedPrior(newValue.split(',') as string[]);
    }
  }
  return (
    <>
    <div data-testid="todo-list" className="todo-list">
    <select onChange={handleChange} title="selectFilter">
        <option value="all" selected>Todas</option>
        <option value="low">Baixa prioridade</option>
        <option value="normal">Normais</option>
        <option value="high">Importantes</option>
      </select>
      {filterTodos(todos).map((todo, key) => (
        <TodoItem key={key} index={todo.index} todo={todo} />
      ))}
    </div>
    </>
  );
}

export default TodoList;
