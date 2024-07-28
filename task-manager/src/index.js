import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import TaskProvider from './context/TaskContext';

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
