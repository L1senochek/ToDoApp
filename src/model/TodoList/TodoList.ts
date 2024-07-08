interface ITodoListProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  toggleTodo: (id: number) => void;
}

export default ITodoListProps;
