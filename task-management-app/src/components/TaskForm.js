import React, { useState, useContext } from 'react';
import TaskContext from './TaskContext';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const { addTask, editTask } = useContext(TaskContext);
  const [task, setTask] = useState(taskToEdit || { id: '', title: '', status: 'pending', dueDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask(task);
      setTaskToEdit(null);
    } else {
      addTask({ ...task, id: Date.now().toString() });
    }
    setTask({ id: '', title: '', status: 'pending', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
