import React, { useState } from 'react';
import { TaskProvider } from './components/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Management App</h1>
        <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
        <TaskList setTaskToEdit={setTaskToEdit} />
      </div>
    </TaskProvider>
  );
}

export default App;
