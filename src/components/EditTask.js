import { useState, useContext } from 'react';
import TasksContext from '../context/tasks';

function EditTask({ task, onSubmit }) {
  const [name, setName] = useState(task.name);
  const { editTaskById } = useContext(TasksContext);

  // RETURN EDITED NEW NAME AND REMOVE EDIT STATE ON SUBMIT
  const handleSubmit = e => {
    e.preventDefault();
    editTaskById(task.id, name);
    onSubmit();
  };

  // HANDLE CHANGE ON INPUT AND SET THE NEW EDITED VALUE
  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rename Task</label>
      <input onChange={handleChange} value={name} autoFocus />
      <button>Save</button>
    </form>
  );
}

export default EditTask;
