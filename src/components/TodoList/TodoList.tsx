import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todolist.module.css';

interface ITodoListProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className={styles.todolist}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
