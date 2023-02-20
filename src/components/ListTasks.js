import ShowTask from './ShowTask';
import { UseTasksContext } from '../hooks/use-Tasks-Context';

function ListTasks() {
  const { tasks } = UseTasksContext();
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
