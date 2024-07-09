import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';
import { describe, expect, it } from 'vitest';

describe('TodoApp: ', (): void => {
  it('Renders initial todos.', (): void => {
    render(<TodoApp />);
    expect(screen.getByText(/Тестовое задание/i)).toBeTruthy();
    expect(screen.getByText(/Прекрасный код/i)).toBeTruthy();
    expect(screen.getByText(/Покрытие тестами/i)).toBeTruthy();
  });

  it('Adds a new todo.', (): void => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    expect(screen.getByText(/New Todo/i)).toBeTruthy();
  });

  it('Clears completed todos.', (): void => {
    render(<TodoApp />);
    const clearButton = screen.getByText(/Clear Completed/i);
    fireEvent.click(clearButton);
    expect(screen.queryByText(/Прекрасный код/i)).toBeNull();
  });
});
