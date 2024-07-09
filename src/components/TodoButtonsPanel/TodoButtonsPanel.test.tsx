import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoButtonsPanel from './TodoButtonsPanel';
import { Filter, ITodo } from '../../model/TodoApp/TodoApp';

const mockTodos: ITodo[] = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
];

const setup = (filter: Filter) => {
  const mockSetFilter = vi.fn();
  const mockClearCompletedTodos = vi.fn();
  render(
    <TodoButtonsPanel
      todos={mockTodos}
      filter={filter}
      setFilter={mockSetFilter}
      clearCompletedTodos={mockClearCompletedTodos}
    />
  );
  return { mockSetFilter, mockClearCompletedTodos };
};

describe('TodoButtonsPanel: ', (): void => {
  it('- Should display the correct count of incomplete items.', (): void => {
    setup(Filter.All);
    expect(screen.getByText('1 items left')).toBeTruthy();
  });

  it('- Should call setFilter with "All" when "All" button is clicked.', (): void => {
    const { mockSetFilter } = setup(Filter.All);
    fireEvent.click(screen.getByText('All'));
    expect(mockSetFilter).toHaveBeenCalledWith(Filter.All);
  });

  it('- Should call setFilter with "Active" when "Active" button is clicked.', (): void => {
    const { mockSetFilter } = setup(Filter.All);
    fireEvent.click(screen.getByText('Active'));
    expect(mockSetFilter).toHaveBeenCalledWith(Filter.Active);
  });

  it('- Should call setFilter with "Completed" when "Completed" button is clicked.', (): void => {
    const { mockSetFilter } = setup(Filter.All);
    fireEvent.click(screen.getByText('Completed'));
    expect(mockSetFilter).toHaveBeenCalledWith(Filter.Completed);
  });

  it('- Should call clearCompletedTodos when "Clear Completed" button is clicked.', (): void => {
    const { mockClearCompletedTodos } = setup(Filter.All);
    fireEvent.click(screen.getByText('Clear Completed'));
    expect(mockClearCompletedTodos).toHaveBeenCalled();
  });
});
