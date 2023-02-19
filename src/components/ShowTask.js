import React from 'react';
import { useState } from 'react';
import EditTask from './EditTask';

function ShowTask({ task, onDelete, onEdit }) {
  const [editStatus, setEditStatus] = useState(false);

  //  HANDLE CLICK TO DELETE
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  // HANDLE CLICK TO EDIT
  const handleEditClick = () => {
    setEditStatus(!editStatus);
  };

  // MERGE onEdit TO CHANGE editStatus ALSO ON SUBMIT
  const handleOnSubmit = (id, newName) => {
    setEditStatus(false);
    onEdit(id, newName);
  };

  let content = editStatus ? (
    <EditTask task={task} onSubmit={handleOnSubmit} />
  ) : (
    task.name
  );

  return (
    <div>
      <h3>{content}</h3>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>X</button>
      </div>
    </div>
  );
}

export default ShowTask;
