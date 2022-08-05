import React, { createContext, useState } from 'react'
import { Todo } from '../types'
import notify from "../utils/notify";

interface TodoContextProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    removeTodo: (index: number) => void;
    completeTodo: (index: number) => void;
    addTodo: (text: string) => void;
};

const TodoContext = createContext({} as TodoContextProps);

const TodoContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            text: 'Fazer o café',
            newText: '',
            isCompleted: true,
            isEditing: false,
            icon: '⏳',
            cleanInput: 'fazer o café',
            index: 0
        },
        {
            text: 'Fazer o almoço',
            newText: '',
            isCompleted: false,
            isEditing: false,
            icon: '⏳',
            cleanInput: 'fazer o almoço',
            index: 1
        }
    ]);
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
          newTodos.push(newTodos.splice(index, 1)[0]);
          setTodos(newTodos as any);
          notify("Tarefa concluída", "success");
        }
      };

      const addTodo = (text: string) => {
        const cleanInput = text.toLowerCase().trim();
        const isInvalid = cleanInput.length === 0 || cleanInput.trim() === "";
        if (isInvalid) {
          notify("Digite algo!", "error");
        } else {
        const newTodos = [...todos] as Todo[];
        const isDuplicated = newTodos.some(todo => todo.cleanInput === cleanInput);
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
            isEditing: false
          });
        setTodos(newTodos as any);
        };
      }};
    
    return (
        <TodoContext.Provider value={{ todos, setTodos, removeTodo, completeTodo, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
}   

// const TodoContextProvider: React.FC = ({ children }) => {
//     const [todos, setTodos] = useState([]);
//     return (
//         <TodoContext.Provider value={{ todos, setTodos }}>
//             {children}
//         </TodoContext.Provider>
//     );
// }

export default TodoContext
export { TodoContextProvider }