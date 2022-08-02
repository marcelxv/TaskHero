export interface Todo {
  index: number;
  text: string;
  isCompleted: boolean;
  icon: string;
  cleanInput: string;
};

export interface AddTodo {
  text: string;
};