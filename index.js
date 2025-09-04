// Select input, button, and task list
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const taskList = document.querySelector("ul");

// Add event listener to button
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim(); // Get input value

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new li element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button ❌
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  // Delete task on click
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append delete button to li
  li.appendChild(deleteBtn);

  // Add li to ul
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});