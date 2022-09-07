import './style.css';
import TodoTasks from './modules/todoTasks.js';
import editResponse from './modules/editResponse.js';

const enterButton = document.querySelector('#enter-button');
const refreshBtn = document.getElementById('refresh-buttton');
const newTaskInput = document.getElementById('new-item');
let storedTasks = JSON.parse(localStorage.getItem('tasks'));

const todoTask = new TodoTasks();

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
  todoTask.add();
  todoTask.remove();
  editResponse();
});

todoTask.displayTaskFromStore();

const completedTask = (taskId, status) => {
  const taskSelected = storedTasks.findIndex((task) => task.index === taskId);
  storedTasks[taskSelected].completed = status;
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

const clearCompletedTasks = () => {
  storedTasks = storedTasks.filter((task) => !task.completed);
  storedTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

const tasksCheckInputs = document.querySelectorAll('.checkbox');
tasksCheckInputs.forEach((checkInput) => {
  checkInput.addEventListener('change', (e) => {
    const taskId = e.target.id.replace('submit-new-item-', '');
    completedTask(Number(taskId), e.target.checked);
    e.target.parentNode.querySelector('.task').classList.toggle('checked');
  });
});

const clearAllCompleted = document.querySelector('.clear-button');
clearAllCompleted.addEventListener('click', () => {
  clearCompletedTasks();
  window.location.reload();
});