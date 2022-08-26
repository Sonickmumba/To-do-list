import editTask from './editTask.js';

const editResponse = () => {
  const todoTaskInputs = document.querySelectorAll('.task');
  todoTaskInputs.forEach((taskInput) => {
    taskInput.addEventListener('focusin', (e) => {
      e.target.parentNode.parentNode.style.background = 'rgb(255,232,195)';
      e.target.style.background = 'rgb(255,232,195)';
      e.target.parentNode.querySelector('.settings').style.background = 'rgb(255,232,195)';
    });
    taskInput.addEventListener('focusout', (e) => {
      e.target.style.background = 'white';
      e.target.parentNode.parentNode.style.background = 'white';
      e.target.parentNode.querySelector('.settings').style.background = '#fff';
    });
    taskInput.addEventListener('input', (e) => {
      const taskId = e.target.id.replace('label-checkbox-', '');
      editTask(taskId, e.target.value);
    });
  });
};

export default editResponse;