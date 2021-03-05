import { FC, useContext } from 'react';
import { useTheme } from '../../hooks/use-theme';
import { RemoveProps } from './interfaces';

const Remove: FC<RemoveProps> = ({ onClick }) => {
  const theme = useTheme();

  console.log(theme);
  return (
    <div onClick={onClick} className={'to-do-list__item__remove'}>
      Remove
    </div>
  );
};

export default Remove;
