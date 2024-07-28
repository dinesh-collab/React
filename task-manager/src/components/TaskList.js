import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true : task.status === filter
  );

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
