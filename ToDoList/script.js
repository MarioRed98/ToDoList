document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        // Create list item
        const listItem = document.createElement('li');

        // Add task text
        listItem.textContent = taskText;

        // Create icons container
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons';

        // Create complete icon
        const completeIcon = document.createElement('i');
        completeIcon.className = 'fas fa-check-circle';
        completeIcon.addEventListener('click', function() {
            listItem.style.textDecoration = 'line-through';
        });

        // Create delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash-alt';
        deleteIcon.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Append icons to container
        iconsContainer.appendChild(completeIcon);
        iconsContainer.appendChild(deleteIcon);

        // Append icons container to list item
        listItem.appendChild(iconsContainer);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }
});
