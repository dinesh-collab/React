import React, { useContext, useState } from 'react';
import TaskContext from './TaskContext';

const TaskList = ({ setTaskToEdit }) => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <span>{task.status}</span>
            <span>{task.dueDate}</span>
            <button onClick={() => setTaskToEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
