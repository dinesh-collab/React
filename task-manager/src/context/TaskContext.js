import React, { createContext, useReducer } from 'react';
import { taskReducer } from '../redux/reducers';
import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_FILTER } from '../redux/actions';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, loadFromLocalStorage());

  const addTask = task => {
    dispatch({ type: ADD_TASK, payload: task });
    saveToLocalStorage(state.tasks);
  };

  const deleteTask = id => {
    dispatch({ type: DELETE_TASK, payload: id });
    saveToLocalStorage(state.tasks);
  };

  const editTask = task => {
    dispatch({ type: EDIT_TASK, payload: task });
    saveToLocalStorage(state.tasks);
  };

  const setFilter = filter => {
    dispatch({ type: SET_FILTER, payload: filter });
  };

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, filter: state.filter, addTask, deleteTask, editTask, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
