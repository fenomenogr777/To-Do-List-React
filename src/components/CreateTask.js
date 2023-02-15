import React from 'react';
import { useState } from 'react';

function CreateTask({ onCreate }) {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(task);
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
