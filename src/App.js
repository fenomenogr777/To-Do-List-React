import { useEffect } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { UseTasksContext } from './hooks/use-Tasks-Context';

const App = () => {
  const { fetchTasks } = UseTasksContext();

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
