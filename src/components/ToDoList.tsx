import { last } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { listOfTasks, theme } from '../constants';
import { Item } from '../interfaces';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';
import { Theme } from '../constants';

const ToDoList = () => {
  const [tasks, setTasks] = useState<Item[]>([]);
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const handleAddTask = (value: string) => {
    const lastTask = last(tasks);
    setTasks([
      ...tasks,
      {
        id: lastTask ? lastTask.id + 1 : 1,
        title: value,
      },
    ]);
  };

  useEffect(() => {
    setTasks(listOfTasks);
  }, []);

  const handleRemoveItem = useCallback(
    (id: number) => {
      const idx = tasks.findIndex((t) => t.id === id);
      setTasks([...tasks.slice(0, idx), ...tasks.slice(idx + 1)]);
    },
    [tasks, setTasks]
  );

  const handleSwitchTheme = useCallback(() => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme, setCurrentTheme]);

  useEffect(() => {
    itemsWrapperRef.current?.scrollTo({
      top: itemsWrapperRef.current.clientHeight,
      behavior: 'smooth',
    });
  }, [tasks]);

  return (
    <Theme.Provider value={theme[currentTheme]}>
      <div className="to-do-list__wrapper">
        <button onClick={handleSwitchTheme}>Switch theme</button>
        <div className="to-do-list__input__wrapper">
          <ToDoInput onSelectTitle={handleAddTask} />
        </div>

        <div ref={itemsWrapperRef} className="to-do-list__items__wrapper">
          {tasks.map((item) =>
            !item.hidden ? (
              <ToDoItem onRemove={handleRemoveItem} key={item.id} item={item} />
            ) : null
          )}
        </div>
      </div>
    </Theme.Provider>
  );
};

export default ToDoList;
