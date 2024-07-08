import React from 'react';
import styles from './todobuttonspanel.module.css';
import { Filter } from '../TodoApp/TodoApp';

interface ITodoButtonsPanelProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompletedTodos: () => void;
}

const TodoButtonsPanel: React.FC<ITodoButtonsPanelProps> = ({
  todos,
  filter,
  setFilter,
  clearCompletedTodos,
}) => {
  const incompleteCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={styles.buttonspanel}>
      <span className={styles.buttonspanel__count}>
        {incompleteCount} items left
      </span>
      <div className={styles.buttonspanel__filters}>
        <button
          className={filter === Filter.All ? styles.active : ''}
          onClick={() => setFilter(Filter.All)}
        >
          All
        </button>
        <button
          className={filter === Filter.Active ? styles.active : ''}
          onClick={() => setFilter(Filter.Active)}
        >
          Active
        </button>
        <button
          className={filter === Filter.Completed ? styles.active : ''}
          onClick={() => setFilter(Filter.Completed)}
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
