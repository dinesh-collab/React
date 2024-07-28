import React, { useContext } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskContext } from './context/TaskContext';

const App = () => {
  const { setFilter } = useContext(TaskContext);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
