export default function TodoForm(onAddTask) {
    return `
        <form id="todo-form">
            <input type="text" class="task-input" placeholder="Enter new task" required>
            <button type="submit">Add</button>
        </form>
    `;
}

export function handleFormSubmit(event, onAddTask) {
    event.preventDefault();
    const taskInput = document.querySelector(".task-input");
    const taskText = taskInput.value.trim();
    if (taskText) {
        onAddTask(taskText);
        taskInput.value = "";
    }
}
