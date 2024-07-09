import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TodoApp: ', (): void => {
  beforeEach(() => {
    render(<TodoApp />);
  });

  it('Renders initial todos.', (): void => {
    expect(screen.getByText(/Тестовое задание/i)).toBeTruthy();
    expect(screen.getByText(/Прекрасный код/i)).toBeTruthy();
    expect(screen.getByText(/Покрытие тестами/i)).toBeTruthy();
  });

  it('Adds a new todo.', (): void => {
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    expect(screen.getByText(/New Todo/i)).toBeTruthy();
  });

  it('Should filter todos.', (): void => {
    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');

    fireEvent.click(activeButton);
    expect(screen.queryByText(/Прекрасный код/i)).not.toBeTruthy();

    fireEvent.click(completedButton);
    expect(screen.queryByText('Прекрасный код')).toBeTruthy();

    fireEvent.click(allButton);
    expect(screen.getByText('Тестовое задание')).toBeTruthy();
  });

  it('Clears completed todos.', (): void => {
    const clearButton = screen.getByText(/Clear Completed/i);
    fireEvent.click(clearButton);
    expect(screen.queryByText(/Прекрасный код/i)).toBeNull();
  });
});
