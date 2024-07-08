import React, { useState } from 'react';
import styles from './todoapp.module.css';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoButtonsPanel from '../TodoButtonsPanel/TodoButtonsPanel';

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

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(todoInitialItems);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === Filter.Active) return !todo.completed;
    if (filter === Filter.Completed) return todo.completed;
    return true;
  });

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__title}>todos</h1>
      <div className={styles.todo__background}>
        <div className={styles.todo__wrapper}>
          <TodoInput addTodo={addTodo} />
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
          <TodoButtonsPanel
            todos={todos}
            filter={filter}
            setFilter={setFilter}
            clearCompletedTodos={clearCompletedTodos}
          />
        </div>
        <div className={styles.todo__wrapper_line_first}></div>
        <div className={styles.todo__wrapper_line_last}></div>
      </div>
    </div>
  );
};

export default TodoApp;
