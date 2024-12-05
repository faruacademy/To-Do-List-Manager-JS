// Select elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a task
addButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  // Append delete button to the list item
  listItem.appendChild(deleteButton);

  // Add the list item to the list
  todoList.appendChild(listItem);

  // Clear the input field
  inputField.value = '';

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });
});

// Allow pressing "Enter" to add a task
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});
