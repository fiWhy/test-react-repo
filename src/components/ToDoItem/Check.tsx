import { FC } from 'react';
import { useTheme } from '../../hooks/use-theme';
import { CheckProps } from './interfaces';

const Check: FC<CheckProps> = ({ onSelect }) => {
  const theme = useTheme();
  return (
    <div
      onClick={onSelect}
      style={{
        backgroundColor: theme.background,
      }}
      className={'to-do-list__item__check'}
    >
      Check
    </div>
  );
};

export default Check;
