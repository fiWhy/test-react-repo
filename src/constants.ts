import { createContext } from 'react';
import { Item } from './interfaces';

export const listOfTasks: Item[] = [
  {
    id: 1,
    title: 'First task',
  },
  {
    id: 2,
    title: 'Second task',
    hidden: false,
  },
  {
    id: 3,
    title: 'Third task',
  },
];

export const theme = {
  light: {
    background: '#fff',
  },
  dark: {
    background: '#000',
  },
};

export const Theme = createContext(theme.light);
