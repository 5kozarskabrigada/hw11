import TodoItem from "./todoItem";

export default function TodoList(tasks, onDelete) {
    return `
        <ul id="todo-list">
            ${tasks.map(task => TodoItem(task, onDelete)).join('')}
        </ul>
    `;
}
