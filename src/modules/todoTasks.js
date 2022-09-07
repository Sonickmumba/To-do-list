import displayTask from './displayTask.js';
import editResponse from './editResponse.js';

class TodoTasks {
  constructor() {
    this.taskShelf = [];
  }

  add = () => {
    const newTaskInput = document.getElementById('new-item');
    const listContainer = document.querySelector('.todo-list-container');
    if (newTaskInput.value !== '') {
      const currentTask = [];
      this.taskShelf.push(
        {
          description: newTaskInput.value,
          completed: false,
          index: listContainer.childElementCount,
        },
      );
      currentTask.push(
        {
          description: newTaskInput.value,
          completed: false,
          index: listContainer.childElementCount + 1,
        },
      );
      for (let i = 0; i < this.taskShelf.length; i += 1) {
        this.taskShelf[i].index = i + 1;
      }
      if (this.taskShelf.length > 0) {
        currentTask.forEach((task) => listContainer.insertAdjacentHTML('beforeend', displayTask(task)));
      }
    }
    newTaskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(this.taskShelf));
  }

  remove = () => {
    if (this.taskShelf.length > 0) {
      const deleteBtn = document.querySelectorAll('.drag');
      deleteBtn.forEach((element) => element.addEventListener('click', () => {
        element.parentNode.remove();
        this.taskShelf = this.taskShelf.filter((x) => x.description !== element.parentNode.getElementsByTagName('input')[1].value);
        for (let i = 0; i < this.taskShelf.length; i += 1) {
          this.taskShelf[i].index = i + 1;
        }
        localStorage.setItem('tasks', JSON.stringify(this.taskShelf));
      }));
    }
  }

  displayTaskFromStore = () => {
    const listContainer = document.querySelector('.todo-list-container');
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks !== null) {
      this.taskShelf = storedTasks;
      this.taskShelf.forEach((task) => {
        listContainer.insertAdjacentHTML('beforeend', displayTask(task));
        this.remove();
        editResponse();
      });
    }
  }
}

export default TodoTasks;