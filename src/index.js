// import _ from 'lodash';
import './style.css';
import editFunction from './modules/editFunction.js';
import displayTask from './modules/displayTask.js';

import tasksMenu from './modules/taskMenu.js';

const listContainer = document.querySelector('.todo-list-container');
const enterButton = document.querySelector('#enter-button');
const refreshBtn = document.getElementById('refresh-buttton');
const newTaskInput = document.getElementById('new-item');
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
let taskShelf = [];

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

const remove = () => {
  if (taskShelf.length > 0) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    let taskShelf = [];
    taskShelf = storedTasks;
    const deleteBtn = document.querySelectorAll('.uil-trash1');
    deleteBtn.forEach((element) => element.addEventListener('click', () => {
      element.closest('.todo').remove();
      taskShelf = taskShelf.filter((x) => x.description !== element.closest('.todo').getElementsByTagName('input')[1].value);
      for (let i = 0; i < taskShelf.length; i += 1) {
        taskShelf[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(taskShelf));
      window.location.reload();
    }));
  }
};

const displayTaskFromStore = () => {
  if (storedTasks !== null) {
    taskShelf = storedTasks;
    taskShelf.forEach((task) => {
      listContainer.insertAdjacentHTML('beforeend', displayTask(task));
      remove();
    });
  }
};

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.querySelector('#enter-button').click();
  }
});

enterButton.addEventListener('click', (e) => {
  e.preventDefault();
  add();
  window.location.reload();
});
displayTaskFromStore();

editFunction();

tasksMenu();
