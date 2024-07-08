import React from 'react';
import styles from './todoitem.module.css';

interface ITodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li
      className={`${styles.todoitem} ${todo.completed ? styles.completed : ''}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <button className={styles.todoitem__btn}>\/</button>
      <span className={styles.todoitem__text}>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
