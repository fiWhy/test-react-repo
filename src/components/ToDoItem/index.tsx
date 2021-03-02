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
        className={classNames({
          'to-do-list__item--finished': finished,
          'to-do-list__item': !finished,
        })}
      >
        <Check onSelect={() => setFinished(!finished)} />
        <TextHolder item={item} />
        <Remove />
      </div>
      <div></div>
    </>
  );
};

export default ToDoItem;
