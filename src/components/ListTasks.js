import React from 'react';
import ShowTask from './ShowTask';

function ListTasks({ tasks, onDelete, onEdit }) {
  // LOOP TASKS
  const allTasks = tasks.map(task => {
    return (
      <ShowTask key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div>{allTasks}</div>;
}

export default ListTasks;
