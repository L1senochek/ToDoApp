interface ITodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
}

export default ITodoItemProps;
