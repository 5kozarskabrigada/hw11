import Header from './componens/header';
import Footer from './componens/footer';
import TodoForm from './componens/todoForm';
import TodoList from './componens/todoList';
import './style.css'; 

const app = document.getElementById('app');


const loadTasks = () => 
{
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
}


const saveTasks = (tasks) => 
{
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const addTask = (taskText) => 
{
  const tasks = loadTasks();

  const newTask = 
{
    id: Date.now(),
    text: taskText
  };

  tasks.push(newTask);
  saveTasks(tasks);
  renderApp(); 

}


const deleteTask = (id) => 
{
  const tasks = loadTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  saveTasks(updatedTasks);
  renderApp();
}


const handleFormSubmit = (event, addTask) => 
{
  event.preventDefault(); 
  const taskText = event.target.elements['task'].value.trim();
  if (taskText) 
  {
    addTask(taskText); 
  }
  event.target.reset();
}


const renderApp = () => 
{
  app.innerHTML = `
        ${Header()}
        <main>
            ${TodoForm(addTask)} 
            ${TodoList(loadTasks(), deleteTask)}
        </main>
        ${Footer()}
    `;

  
  document.querySelectorAll('.delete-btn').forEach(button => 
  {
    button.addEventListener('click', (event) => 
    {
      const taskId = parseInt(event.target.getAttribute('data-id'));
      deleteTask(taskId); 
    });
  });

 
  const form = document.querySelector('#todo-form');
  form.addEventListener('submit', (event) => handleFormSubmit(event, addTask));
};

renderApp(); 