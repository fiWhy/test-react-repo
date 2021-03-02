import { FC } from 'react';
import { TextHolderProps } from './interfaces';

const TextHolder: FC<TextHolderProps> = ({ item }) => {
  const { id, title } = item;
  return (
    <div className={'to-do-list__item__text-holder text-holder'}>
      <div>{id}</div>
      <div className={'text'}>{title}</div>
    </div>
  );
};
export default TextHolder;
