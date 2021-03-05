import { FC } from 'react';
import { TextHolderProps } from './interfaces';

const TextHolder: FC<TextHolderProps> = ({ item }) => {
  const { id, title } = item;
  return (
    <div className={'to-do-list__item__text-holder text-holder'}>
      <span>{id}.</span>
      <span className={'text'}>{title}</span>
    </div>
  );
};
export default TextHolder;
