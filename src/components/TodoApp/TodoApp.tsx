import React, { useState } from 'react';
import styles from './todoapp.module.css';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const todoInitialItems = [
  {
    id: Date.now() + 1,
    text: 'Тестовое задание',
    completed: false,
  },
  {
    id: Date.now() + 2,
    text: 'Прекрасный код',
    completed: true,
  },
  {
    id: Date.now() + 3,
    text: 'Покрытие тестами',
    completed: false,
  },
];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(todoInitialItems);

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>todos</h1>
      <div className={styles.todo__background}>
        <div className={styles.todo__wrapper}>
          <TodoInput addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
        <div className={styles.todo__wrapper_line_first}></div>
        <div className={styles.todo__wrapper_line_last}></div>
      </div>
    </div>
  );
};

export default TodoApp;
