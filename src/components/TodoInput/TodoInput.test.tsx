import { describe, expect, beforeEach, vi, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

const mockAddTodo = vi.fn();

describe('TodoInput: ', (): void => {
  beforeEach((): void => {
    mockAddTodo.mockClear();
  });

  test('- Render TodoInput component.', (): void => {
    const { getByPlaceholderText } = render(
      <TodoInput addTodo={mockAddTodo} />
    );

    expect(getByPlaceholderText('What needs to be done?')).toBeTruthy();
  });

  test('- Add text input and form submission.', (): void => {
    const { getByPlaceholderText, getByRole } = render(
      <TodoInput addTodo={mockAddTodo} />
    );

    const input = getByPlaceholderText(
      'What needs to be done?'
    ) as HTMLInputElement;
    const button = getByRole('button');

    fireEvent.change(input, { target: { value: 'Test task' } });
    expect(input.value).toBe('Test task');

    fireEvent.click(button);
    expect(mockAddTodo).toHaveBeenCalledWith('Test task');
    expect(input.value).toBe('');
  });

  test('- Does not call addTodo with an empty input.', (): void => {
    const { getByRole } = render(<TodoInput addTodo={mockAddTodo} />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
