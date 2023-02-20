import { useContext } from 'react';
import TasksContext from '../context/tasks';

function UseTasksContext() {
  return useContext(TasksContext);
}

export { UseTasksContext };
