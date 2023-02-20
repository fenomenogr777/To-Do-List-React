import { useContext } from 'react';
import ShowTask from './ShowTask';
import TasksContext from '../context/tasks';

function ListTasks() {
  const { tasks } = useContext(TasksContext);
  // LOOP TASKS
  const allTasks = tasks.map(task => {
    return <ShowTask key={task.id} task={task} />;
  });

  return (
    <div>
      {allTasks} {}
    </div>
  );
}

export default ListTasks;
