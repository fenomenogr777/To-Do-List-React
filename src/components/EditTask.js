import React from 'react';
import { useState } from 'react';

function EditTask({ task, onSubmit }) {
  const [name, setName] = useState(task.name);

  // RETURN EDITED NEW NAME AND REMOVE EDIT STATE ON SUBMIT
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(task.id, name);
  };

  // HANDLE CHANGE ON INPUT AND SET THE NEW EDITED VALUE
  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rename Task</label>
      <input onChange={handleChange} value={name} />
      <button>Save</button>
    </form>
  );
}

export default EditTask;
