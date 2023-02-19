import React from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // SHOW TASKS ON FIRST LOAD
  useEffect(() => {
    fetchTasks();
  }, []);

  // GET TASKS FROM JSON SERVER
  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3001/tasks');
    setTasks(res.data);
  };

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

  return (
    <div>
      <h1>TO DO LIST 2023</h1>
      <CreateTask onCreate={createNewTask} />
      <ListTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onEdit={editTaskById}
      />
    </div>
  );
};

export default App;
