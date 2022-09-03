const editTask = (taskId, taskDescription) => {
  let storedTasks = JSON.parse(localStorage.getItem('tasks'));
  storedTasks = storedTasks.map((task) => {
    if (task.index === Number(taskId)) {
      return { ...task, description: taskDescription };
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

export default editTask;