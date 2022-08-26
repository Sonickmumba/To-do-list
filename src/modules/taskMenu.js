const tasksMenu = () => {
  const todoTaskInputs = document.querySelectorAll('.task');
  todoTaskInputs.forEach((taskInput) => {
    const threeBtn = taskInput.parentElement.lastElementChild.lastElementChild;
    const taskMenu = taskInput.parentElement.lastElementChild.firstElementChild;
    threeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      taskMenu.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
      if (e.target.tagName !== 'I' || e.target !== threeBtn) {
        taskMenu.classList.remove('show');
      }
    });
  });
};

export default tasksMenu;