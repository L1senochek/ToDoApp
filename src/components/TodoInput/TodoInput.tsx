import React, { useState } from 'react';
import styles from './todoinput.module.css';
import IconAngle from '../Icons/Angle/Angle';
import ITodoInputProps from '../../model/TodoInput/TodoInput';

const TodoInput: React.FC<ITodoInputProps> = ({ addTodo }): JSX.Element => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoinput}>
      <button type="submit" className={styles.todoinput__btn}>
        <IconAngle />
      </button>
      <input
        className={styles.todoinput__input}
        type="text"
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setInputText(e.target.value)
        }
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
