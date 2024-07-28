import { ADD_TASK, DELETE_TASK, EDIT_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [],
  filter: 'all'
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, { ...action.payload, id: Date.now() }] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case EDIT_TASK:
      return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
