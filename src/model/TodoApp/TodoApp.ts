export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
