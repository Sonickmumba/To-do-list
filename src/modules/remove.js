// const storedTasks = JSON.parse(localStorage.getItem('tasks'));
const remove = () => {
  const taskShelf = [];
  if (taskShelf.length > 0) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    let taskShelf = [];
    taskShelf = storedTasks;
    const deleteBtn = document.querySelectorAll('.uil-trash');
    deleteBtn.forEach((element) => element.addEventListener('click', () => {
      element.closest('.todo').remove();
      taskShelf = taskShelf.filter((x) => x.description !== element.closest('.todo').getElementsByTagName('input')[1].value);
      for (let i = 0; i < taskShelf.length; i += 1) {
        taskShelf[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(taskShelf));
    }));
  }
};

export default remove;