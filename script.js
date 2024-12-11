// Retrieve tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task";

        taskItem.innerHTML = `
      <span>${task.name}</span>
      <div>
        <button onclick="markComplete(${index})">${task.completed ? "Undo" : "Complete"}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

        // Apply strikethrough for completed tasks
        if (task.completed) {
            taskItem.querySelector("span").style.textDecoration = "line-through";
        }

        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (!taskName) {
        alert("Please enter a valid task!");
        return;
    }

    // Create a new task object
    const newTask = {
        name: taskName,
        completed: false
    };

    tasks.push(newTask); // Add task to the array
    saveTasks();         // Save updated tasks to localStorage
    displayTasks();      // Refresh the task list
    taskInput.value = ""; // Clear the input field
}

// Function to mark a task as complete or undo completion
function markComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

// Function to delete a task
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1); // Remove task from the array
        saveTasks();
        displayTasks();
    }
}

// Initial display of tasks
displayTasks();