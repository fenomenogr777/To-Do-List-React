import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  // GET TASKS FROM JSON SERVER +ADDED useCallback TO FIX A BUG ON INF REQUESTS
  const fetchTasks = useCallback(async () => {
    const res = await axios.get('http://localhost:3001/tasks');
    setTasks(res.data);
  }, []);

  // CREATE TASK
  const createNewTask = async task => {
    const res = await axios.post('http://localhost:3001/tasks', { name: task });
    const updatedTasks = [...tasks, res.data];
    setTasks(updatedTasks);
  };

  // DELETE TASK BY ID
  const deleteTaskById = async id => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const updatedTasks = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  // EDIT TASK BY ID
  const editTaskById = async (id, newTask) => {
    const res = await axios.put(`http://localhost:3001/tasks/${id}`, {
      name: newTask,
    });
    const updatedTasks = tasks.map(task => {
      if (task.id === id) return res.data;
      return task;
    });

    setTasks(updatedTasks);
  };

  const TasksContextData = {
    tasks,
    createNewTask,
    editTaskById,
    deleteTaskById,
    fetchTasks,
  };

  return (
    <TasksContext.Provider value={TasksContextData}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider };
export default TasksContext;
