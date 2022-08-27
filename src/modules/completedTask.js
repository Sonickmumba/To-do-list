import remove from './remove.js';
let storedTasks = JSON.parse(localStorage.getItem('tasks'));

const completedTask = () => {
  function completedTask(taskId, status) {
    const taskSelected = storedTasks.findIndex((task) => task.index === taskId);
    storedTasks[taskSelected].completed = status;
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  const tasksCheckInputs = document.querySelectorAll('.checkbox');
  tasksCheckInputs.forEach((checkInput) => {
    checkInput.addEventListener('change', (e) => {
      const taskId = e.target.id.replace('submit-new-item-', '');
      completedTask(Number(taskId), e.target.checked);
      e.target.parentNode.querySelector('.task').classList.toggle('checked');
    });
  });
  function clearCompletedTasks() {
    storedTasks = storedTasks.filter((task) => !task.completed);
    storedTasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  const clearAllCompleted = document.querySelector('.clear-button');
  clearAllCompleted.addEventListener('click', () => {
    clearCompletedTasks();
    window.location.reload();
  });
};

export default completedTask;