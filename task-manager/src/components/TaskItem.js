import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, editTask } = useContext(TaskContext);

  const handleStatusChange = () => {
    editTask({ ...task, status: task.status === 'pending' ? 'completed' : 'pending' });
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleStatusChange}>
        {task.status === 'pending' ? 'Complete' : 'Undo'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
