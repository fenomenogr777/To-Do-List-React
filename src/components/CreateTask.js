import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasks';

function CreateTask() {
  const [task, setTask] = useState('');
  const { createNewTask } = useContext(TasksContext);

  const handleSubmit = e => {
    e.preventDefault();
    createNewTask(task);
    setTask('');
  };

  const handleChange = e => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={task} />
      <button>Add Task</button>
    </form>
  );
}

export default CreateTask;
