import React from 'react';
import styles from './todobuttonspanel.module.css';
import { ITodoButtonsPanelProps } from '../../model/TodoButtonsPanel/TodoButtonsPanel';
import { Filter, ITodo } from '../../model/TodoApp/TodoApp';

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
        <button
          className={filter === Filter.All ? styles.active : ''}
          onClick={(): void => setFilter(Filter.All)}
        >
          All
        </button>
        <button
          className={filter === Filter.Active ? styles.active : ''}
          onClick={(): void => setFilter(Filter.Active)}
        >
          Active
        </button>
        <button
          className={filter === Filter.Completed ? styles.active : ''}
          onClick={(): void => setFilter(Filter.Completed)}
        >
          Completed
        </button>
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
