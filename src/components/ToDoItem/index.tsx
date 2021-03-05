import { FC, memo, useMemo, useState } from 'react';
import Check from './Check';
import { ToDoItemProps } from './interfaces';
import Remove from './Remove';
import TextHolder from './TextHolder';
import classNames from 'classnames';

const ToDoItem: FC<ToDoItemProps> = ({ item, onRemove }) => {
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
        <Remove onClick={() => onRemove(item.id)} />
      </div>
      <div></div>
    </>
  );
};

export default memo(ToDoItem);
