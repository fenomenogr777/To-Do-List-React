import { useContext, useEffect } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import TasksContext from './context/tasks';

const App = () => {
  const { fetchTasks } = useContext(TasksContext);

  // SHOW TASKS ON FIRST LOAD
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>TO DO LIST 2023</h1>
      <CreateTask />
      <ListTasks />
    </div>
  );
};

export default App;
