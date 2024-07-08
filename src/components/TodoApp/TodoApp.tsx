import React, { useState } from 'react';
import styles from './todoapp.module.css';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoButtonsPanel from '../TodoButtonsPanel/TodoButtonsPanel';
import todoInitialItems from './todoInitialItems/todoInitialItems';
import { Filter, ITodo } from '../../model/TodoApp/TodoApp';

const TodoApp: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>(todoInitialItems);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const addTodo = (text: string): void => {
    const newTodo: ITodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(
        (todo: ITodo): ITodo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompletedTodos = (): void => {
    const newTodos = todos.filter((todo: ITodo): boolean => !todo.completed);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo: ITodo): boolean => {
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
