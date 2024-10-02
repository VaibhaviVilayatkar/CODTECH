document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value;

    if (taskValue.trim() !== '') {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});
