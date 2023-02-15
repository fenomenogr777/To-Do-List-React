import React from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // CREATE TASK
  const createNewTask = task => {
    const updatedTasks = [
      ...tasks,
      { name: task, id: Math.round(Math.random() * 9999) },
    ];
    setTasks(updatedTasks);
  };

  // DELETE TASK BY ID
  const deleteTaskById = id => {
    const updatedTasks = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  // EDIT TASK BY ID
  const editTaskById = (id, newTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) return { ...task, name: newTask };
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
