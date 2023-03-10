import { useState } from 'react';
import { UseTasksContext } from '../hooks/use-Tasks-Context';

function CreateTask() {
  const [task, setTask] = useState('');
  const { createNewTask } = UseTasksContext();

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
