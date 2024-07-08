import React, { useState } from 'react';
import styles from './todoinput.module.css';
import IconAngle from '../Icons/Angle/Angle';

interface ITodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<ITodoInputProps> = ({ addTodo }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
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
        onChange={(e) => setInputText(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
