document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');

        // Creazione elemento della lista
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        // Contenitore del testo
        const textContainer = document.createElement('span');
        textContainer.textContent = taskText;
        textContainer.className = 'task-text';
        listItem.appendChild(textContainer);

        // Contenitore delle icone
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons';

        const actions = [
            { className: 'fas fa-edit', title: 'Modifica', action: () => editTask(textContainer) },
            { className: 'fas fa-check-circle', title: 'Completa', action: () => toggleComplete(listItem) },
            { className: 'fas fa-trash-alt', title: 'Elimina', action: () => taskList.removeChild(listItem) },
            { className: 'fas fa-arrow-up', title: 'Sposta su', action: () => moveTask(listItem, -1) },
            { className: 'fas fa-arrow-down', title: 'Sposta giù', action: () => moveTask(listItem, 1) }
        ];

        actions.forEach(({ className, title, action }) => {
            const icon = document.createElement('i');
            icon.className = className;
            icon.title = title;
            icon.addEventListener('click', action);
            iconsContainer.appendChild(icon);
        });

        // Aggiunta del contenitore icone all'elemento della lista
        listItem.appendChild(iconsContainer);

        // Aggiunta dell'elemento alla lista
        taskList.appendChild(listItem);

        // Pulisce il campo di input
        taskInput.value = '';
    } else {
        alert('Inserisci un testo valido per l\'attività.');
    }
});

function editTask(textContainer) {
    const newText = prompt('Modifica la tua attività:', textContainer.textContent);
    if (newText !== null && newText.trim() !== '') {
        textContainer.textContent = newText.trim();
    }
}

function toggleComplete(listItem) {
    listItem.classList.toggle('completed');
}

function moveTask(listItem, direction) {
    const taskList = listItem.parentElement;
    if (direction === -1 && listItem.previousElementSibling) {
        taskList.insertBefore(listItem, listItem.previousElementSibling);
    } else if (direction === 1 && listItem.nextElementSibling) {
        taskList.insertBefore(listItem.nextElementSibling, listItem);
    }
}
