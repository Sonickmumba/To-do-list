const editResponse = () => {
  const todoTaskInputs = document.querySelectorAll('.task');
  todoTaskInputs.forEach((taskInput) => {
    taskInput.addEventListener('focusin', (e) => {
      e.target.parentNode.parentNode.style.background = 'rgb(255,232,195)';
      e.target.style.background = 'rgb(255,232,195)';
      e.target.parentNode.querySelector('.drag').style.background = 'rgb(255,232,195)';
    });
    taskInput.addEventListener('focusout', (e) => {
      e.target.style.background = 'white';
      e.target.parentNode.parentNode.style.background = 'white';
      e.target.parentNode.querySelector('.drag').style.background = 'white';
    });
    taskInput.addEventListener('input', (e) => {
      e.preventDefault();
      const taskId = e.target.id.replace('label-checkbox-', '');
      let storedTasks = JSON.parse(localStorage.getItem('tasks'));
      storedTasks = storedTasks.map((task) => {
        if (task.index === Number(taskId)) {
          return { ...task, description: e.target.value };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    });
  });
};

export default editResponse;
