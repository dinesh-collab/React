export const saveToLocalStorage = tasks => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const loadFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? { tasks: JSON.parse(tasks), filter: 'all' } : { tasks: [], filter: 'all' };
  };
  