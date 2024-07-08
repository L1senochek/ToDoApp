import React from 'react';
import styles from './todoapp.module.css';

const TodoApp: React.FC = () => {
  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>todos</h1>
      <div className={styles.todo__wrapper}>
        <h2>123</h2>

        <h2>321</h2>
      </div>
    </div>
  );
};

export default TodoApp;
