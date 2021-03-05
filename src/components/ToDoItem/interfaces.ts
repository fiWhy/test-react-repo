import { Item } from '../../interfaces';

export interface ToDoItemProps {
  item: Item;
  onRemove: (id: number) => void;
}

export interface TextHolderProps {
  item: Item;
}

export interface CheckProps {
  onSelect: () => void;
}

export interface RemoveProps {
  onClick: () => void;
}
