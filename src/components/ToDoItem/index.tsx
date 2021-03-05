import { FC, useState } from 'react';
import Check from './Check';
import { ToDoItemProps } from './interfaces';
import Remove from './Remove';
import TextHolder from './TextHolder';
import classNames from 'classnames';

const ToDoItem: FC<ToDoItemProps> = ({ item }) => {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <div
        className={classNames([
          'item',
          {
            'to-do-list__item--finished': finished,
            'to-do-list__item': !finished,
          },
        ])}
      >
        <TextHolder item={item} />
        <Check onSelect={() => setFinished(!finished)} />
        <Remove />
      </div>
      <div></div>
    </>
  );
};

export default ToDoItem;
