import { last } from 'lodash';
import { useEffect, useState } from 'react';
import { listOfTasks } from '../constants';
import { Item } from '../interfaces';
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [tasks, setTasks] = useState<Item[]>([]);

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

  return (
    <div className="to-do-list__wrapper">
      <div className="to-do-list__input__wrapper">
        <ToDoInput onSelectTitle={handleAddTask} />
      </div>
      <div className="to-do-list__items__wrapper">
        {tasks.map((item) =>
          !item.hidden ? <ToDoItem key={item.id} item={item} /> : null
        )}
      </div>
    </div>
  );
};

export default ToDoList;
