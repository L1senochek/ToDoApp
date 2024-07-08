import { Filter } from '../TodoApp/TodoApp';

export interface ITodoButtonsPanelProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompletedTodos: () => void;
}
