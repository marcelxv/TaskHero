export interface Todo {
  index: number;
  text: string | number | readonly string[] | undefined;
  newText: string | number | readonly string[] | undefined;
  isCompleted: boolean;
  icon: string;
  cleanInput: string;
  isEditing: boolean;
  priority: string | number | readonly string[] | undefined;
}


// export interface TodoContext {
//   todoList: TodoList;
//   setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
// };
