const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let completedCount = 0;
let uncompletedCount = 0; 
function updateTaskCount() {
    taskCount.textContent = `Completed: ${completedCount} | Uncompleted: ${uncompletedCount}`;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            completedCount++;
            uncompletedCount--;
            li.classList.add('completed');
        } else {
            completedCount--;
            uncompletedCount++;
            li.classList.remove('completed');
        }
        updateTaskCount();
    });

    const label = document.createElement('label');
    label.textContent = taskText;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);

    taskInput.value = ""; 
    uncompletedCount++;
    updateTaskCount();
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


updateTaskCount();