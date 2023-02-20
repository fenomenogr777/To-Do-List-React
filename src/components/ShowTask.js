import EditTask from './EditTask';
import { useState } from 'react';
import { UseTasksContext } from '../hooks/use-Tasks-Context';

function ShowTask({ task }) {
  const [editStatus, setEditStatus] = useState(false);
  const { deleteTaskById } = UseTasksContext();

  //  HANDLE CLICK TO DELETE
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  // HANDLE CLICK TO EDIT
  const handleEditClick = () => {
    setEditStatus(!editStatus);
  };

  const closeEditStatus = (id, newName) => {
    setEditStatus(false);
  };

  let content = editStatus ? (
    <EditTask task={task} onSubmit={closeEditStatus} />
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
