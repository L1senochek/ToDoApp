import { Filter } from '../../../model/TodoApp/TodoApp';
import { FilterButtons } from '../../../model/TodoButtonsPanel/TodoButtonsPanel';

const filterButtons: FilterButtons[] = [
  { type: Filter.All, label: 'All' },
  { type: Filter.Active, label: 'Active' },
  { type: Filter.Completed, label: 'Completed' },
];

export default filterButtons;
