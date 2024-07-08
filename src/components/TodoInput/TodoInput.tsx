import React, { useState } from 'react';
import styles from './todoinput.module.css';
import IconAngle from '../Icons/Angle/Angle';

interface Props {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
