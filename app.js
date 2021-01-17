// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  //Remove task events
  taskList.addEventListener("click", removeTask);
  //Clear task events
  clearBtn.addEventListener("click", clearTasks);
  //filter task events
  filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = "";

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e) {
  if (e.target.classList.contains("clear-tasks")) {
    if (confirm("Are you sure")) {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
    }
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
