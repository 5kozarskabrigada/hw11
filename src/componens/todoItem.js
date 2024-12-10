export default function TodoItem(task, onDelete) {
    return `
        <li>
            <span>${task.text}</span>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        </li>
    `;
}
