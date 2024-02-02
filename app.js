let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
    };

    tasks.push(task);
    newTaskInput.value = '';
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}
