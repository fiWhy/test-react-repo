import { listOfTasks } from '../constants';
import ExampleClassComponent from './ExampleClassComponent';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return (
    <div className="to-do-list__wrapper">
      <ExampleClassComponent num={2} />
      <div className="to-do-list__items__wrapper">
        {listOfTasks.map((item) =>
          !item.hidden ? <ToDoItem key={item.id} item={item} /> : null
        )}
      </div>
    </div>
  );
};

export default ToDoList;
