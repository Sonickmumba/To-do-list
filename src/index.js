// import _ from 'lodash';
import './style.css';

const listContainer = document.querySelector('.todo-list-container');

const tasks = [
  {
    description: 'Wash plates',
    completed: false,
    index: 0,
  },
  {
    description: 'play soccer',
    completed: false,
    index: 1,
  },
  {
    description: 'Read on javascript objects',
    completed: false,
    index: 2,
  },
  {
    description: 'Study stacks and Queues',
    completed: false,
    index: 3,
  },
];

tasks.forEach((task) => {
  const ul = document.createElement('ul');
  ul.id = 'item-list';
  ul.innerHTML = `<li class="todo">
  <input id="submit-new-item" type="checkbox" value="" title="" class="icon-return" />
  <div class="view"><p>${task.description}</p></div><button type="button" class="drag">
  <span class="material-symbols-outlined">more_vert</span>
  </button></li>`;

  listContainer.appendChild(ul);
});
