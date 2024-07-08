import React, { useState } from 'react';
import styles from './todoapp.module.css';
import TodoInput from '../TodoInput/TodoInput';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>todos</h1>
      <div className={styles.todo__wrapper}>
        <TodoInput addTodo={addTodo} />
        <h2>123</h2>

        <h2>321</h2>
      </div>
    </div>
  );
};

export default TodoApp;
