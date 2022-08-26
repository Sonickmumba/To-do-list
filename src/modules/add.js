import displayTask from './displayTask.js';

const listContainer = document.querySelector('.todo-list-container');
const newTaskInput = document.getElementById('new-item');
const taskShelf = [];

const add = () => {
  if (newTaskInput.value !== '') {
    const currentTask = [];
    currentTask.push(
      {
        description: newTaskInput.value,
        completed: false,
        index: 1,
      },
    );
    taskShelf.push(
      {
        description: newTaskInput.value,
        completed: false,
        index: currentTask[currentTask.length - 1].index + 1,
      },
    );
    for (let i = 0; i < taskShelf.length; i += 1) {
      taskShelf[i].index = i + 1;
    }
    if (taskShelf.length > 0) {
      currentTask.forEach((task) => listContainer.insertAdjacentHTML('beforeend', displayTask(task)));
    }
  }
  newTaskInput.value = '';
  localStorage.setItem('tasks', JSON.stringify(taskShelf));
};

export default add;