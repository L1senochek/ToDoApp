import React from 'react';
import styles from './todoitem.module.css';
import IconCheck from '../Icons/Check/Check';
import ITodoItemProps from '../../model/TodoItem/TodoItem';

const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  toggleTodo,
}): JSX.Element => {
  return (
    <li
      className={`${styles.todoitem} ${todo.completed ? styles.completed : ''}`}
      onClick={(): void => toggleTodo(todo.id)}
    >
      <button className={styles.todoitem__btn}>
        <IconCheck completed={todo.completed ? true : false} />
      </button>
      <span className={styles.todoitem__text}>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
