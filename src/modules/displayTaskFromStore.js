import displayTask from './displayTask.js';
import remove from './remove.js';

const displayTaskFromStore = () => {
  const listContainer = document.querySelector('.todo-list-container');
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks !== null) {
    const taskShelf = storedTasks;
    taskShelf.forEach((task) => {
      listContainer.insertAdjacentHTML('beforeend', displayTask(task));
      remove();
    });
  }
};

export default displayTaskFromStore;