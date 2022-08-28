import React, { createContext, useState } from "react";
import { Todo } from "../types";
import notify from "../utils/notify";
interface TodoContextProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  removeTodo: (index: number) => void;
  completeTodo: (index: number) => void;
  addTodo: (text: string, prior: string, address: string, zipCode: string, time: string, date: string) => void;
  editTodo: (index: number) => void;
  saveTodo: (
    index: number,
    text: string | number | readonly string[] | undefined
  ) => void;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  persistTodos: () => void;
  persistIsLogged: (status: boolean) => void;
  getLocalData: () => void;
}

const TodoContext = createContext({} as TodoContextProps);

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLogged, setIsLogged] = useState(false);

  // Functions

  const removeTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    newTodos.splice(index, 1);
    setTodos(newTodos as any);
    notify("Tarefa removida", "error");
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    if (newTodos[index].isCompleted) {
      newTodos[index].isCompleted = false;
      setTodos(newTodos as any);
      notify("Tarefa marcada como incompleta", "info");
    } else {
      newTodos[index].isCompleted = true;
      // newTodos.push(newTodos.splice(index, 1)[0]);
      setTodos(newTodos as any);
      notify("Tarefa concluída", "success");
    }
  };


  const addTodo = (text: string, prior: string, address: string, zipCode: string, time: string, date: string) => {
    const cleanInput = text.toLowerCase().trim();
    const isInvalid = cleanInput.length === 0 || cleanInput.trim() === "";
    if (isInvalid) {
      notify("Digite algo!", "error");
    } else {
      const newTodos = [...todos] as Todo[];
      const isDuplicated = newTodos.some(
        (todo) => todo.cleanInput === cleanInput
      );
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
          isEditing: false,
          priority: prior,
          address: address,
          zipCode: zipCode,
          time: time,
          date: date,
        });
        setTodos(newTodos as any);
        persistTodos()
      }
    }
  };

  const editTodo = (index: number) => {
    const newTodos = [...todos] as Todo[];
    newTodos[index].isEditing = true;
    setTodos(newTodos as any);
  };

  const saveTodo = (
    index: number,
    text: string | number | readonly string[] | undefined
  ) => {
    const newTodos = [...todos] as Todo[];
    newTodos[index].isEditing = false;
    newTodos[index].text = text;
    setTodos(newTodos as any);
  };

  // Persist login status and todo list
  const persistTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const persistIsLogged = (status: boolean) => {
    localStorage.setItem("isLogged", JSON.stringify(status));
    console.log(isLogged);
  }

  // retreive data from local storage
  const getLocalData = () => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged) {
      return setIsLogged(JSON.parse(isLogged));
    } else {
      return [];
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        removeTodo,
        completeTodo,
        addTodo,
        editTodo,
        saveTodo,
        isLogged,
        setIsLogged,
        persistTodos,
        persistIsLogged,
        getLocalData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
export { TodoContextProvider };
