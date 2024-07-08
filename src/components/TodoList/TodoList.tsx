import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todolist.module.css';
import ITodoListProps from '../../model/TodoList/TodoList';
import { ITodo } from '../../model/TodoApp/TodoApp';

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  toggleTodo,
}): JSX.Element => {
  return (
    <ul className={styles.todolist}>
      {todos.map(
        (todo: ITodo): JSX.Element => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        )
      )}
    </ul>
  );
};

export default TodoList;
