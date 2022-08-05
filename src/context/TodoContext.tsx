import React, { createContext, useState } from 'react'
import { Todo } from '../types'
import notify from "../utils/notify";

interface TodoContextProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    removeTodo: (index: number) => void;
    completeTodo: (index: number) => void;
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
    
    return (
        <TodoContext.Provider value={{ todos, setTodos, removeTodo, completeTodo }}>
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