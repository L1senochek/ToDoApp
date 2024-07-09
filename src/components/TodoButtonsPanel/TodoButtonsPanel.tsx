import React from 'react';
import styles from './todobuttonspanel.module.css';
import { ITodoButtonsPanelProps } from '../../model/TodoButtonsPanel/TodoButtonsPanel';
import { ITodo } from '../../model/TodoApp/TodoApp';
import filterButtons from './filterButtons/filterButtons';

const TodoButtonsPanel: React.FC<ITodoButtonsPanelProps> = ({
  todos,
  filter,
  setFilter,
  clearCompletedTodos,
}): JSX.Element => {
  const incompleteCount = todos.filter(
    (todo: ITodo): boolean => !todo.completed
  ).length;

  return (
    <div className={styles.buttonspanel}>
      <span className={styles.buttonspanel__count}>
        {incompleteCount} items left
      </span>
      <div className={styles.buttonspanel__filters}>
        {filterButtons.map(({ type, label }) => (
          <button
            key={type}
            className={filter === type ? styles.active : ''}
            onClick={(): void => setFilter(type)}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        className={styles.buttonspanel__clear}
        onClick={clearCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoButtonsPanel;
