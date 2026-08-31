import { getTodosFromLocalStorage, saveTodosToLocalStorage } from './storage.js';
import { createDomElement, createTodoItem } from './dom.js';
const root = document.getElementById('root');

let todosArray = getTodosFromLocalStorage();
let currentFilter = 'all';

const container = createDomElement('div', {
   className: 'container'
});
const wrapper = createDomElement('div', {
   className: 'todo__wrapper'
})
const deleteAllButton = createDomElement('button', {
   className: 'todo__button deleteAllBtn',
   textContent: 'Delete All'
})
const input = createDomElement('input', {
   className: 'todo__input',
   placeholder: 'Enter todo ...'
})
const addButton = createDomElement('button', {
   className: 'todo__button addBtn',
   textContent: 'Add'
})
const deleteLastButton = createDomElement('button', {
   className: 'todo__button deleteLastBtn',
   textContent: 'Delete Last'
})
const filters = createDomElement('div', {
   className: 'todo__filters'
})
const counter = createDomElement('p', {
   className: 'todo__counter',
   textContent: `All: ${todosArray.length}`
})
const completedCounter = createDomElement('p', {
   className: 'todo__counter',
   textContent: `Completed: ${todosArray.filter(todo => todo.checked === true).length}`
})
const showAllButton = createDomElement('button', {
   className: 'todo__button showAllBtn',
   textContent: 'Show All'
})
const showCompletedButton = createDomElement('button', {
   className: 'todo__button showCompletedBtn',
   textContent: 'Show Completed'
})
const searchInput = createDomElement('input', {
   className: 'todo__input',
   placeholder: 'Search...'
})

const fragmentWrapper = document.createDocumentFragment();
fragmentWrapper.append(deleteAllButton, deleteLastButton, input, addButton)
wrapper.prepend(fragmentWrapper)
const fragmentFilters = document.createDocumentFragment();
fragmentFilters.append(counter, completedCounter, showAllButton, showCompletedButton, searchInput);
filters.prepend(fragmentFilters)

const todoList = createDomElement('div', {
   className: 'todo__list'
});
container.append(wrapper, filters, todoList);

todoList.addEventListener('click', (e) => {
   const target = e.target;
   const item = target.closest('.todo__item');

   if (!item) return;

   if (target.classList.contains('todo__deleteBtn')) {
      todosArray = todosArray.filter(todo => {
         return todo.id != item.dataset.id
      })
      saveTodosToLocalStorage(todosArray)
      renderTodos(todosArray);
   }

   if (target.classList.contains('todo__completeBtn')) {
      const doneTodo = todosArray.find(todo => todo.id === Number(item.dataset.id))
      doneTodo.checked = !doneTodo.checked;
      saveTodosToLocalStorage(todosArray);
      calcCompleted();

      item.classList.toggle('todo__item-done');
      if (target.classList.toggle('todo__complete-active')) {
         target.textContent = '✓';
      } else {
         target.textContent = '';
      }

      if (currentFilter === 'completed' && !doneTodo.checked) {
         renderTodos(todosArray);
      }
   }
});

wrapper.addEventListener('click', ({ target }) => {
   if (target.classList.contains('addBtn')) {
      const todoText = input.value.trim();
      if (todoText === '') {
         alert('Введите текст задачи!');
         return;
      }

      const newTodoObj = {
         id: Date.now(),
         text: todoText,
         checked: false,
         date: new Date().toLocaleDateString()
      }
      todosArray.push(newTodoObj);
      saveTodosToLocalStorage(todosArray);
      input.value = '';
      renderTodos(todosArray);
   }
   if (target.classList.contains('deleteAllBtn')) {
      todosArray = [];
      saveTodosToLocalStorage(todosArray);
      renderTodos(todosArray);
   }
   if (target.classList.contains('deleteLastBtn')) {
      if (todosArray.length === 0) {
         return;
      }
      else {
         todosArray.pop();
         saveTodosToLocalStorage(todosArray);
         renderTodos(todosArray);
      }
   }
})
showAllButton.addEventListener('click', () => {
   currentFilter = 'all';
   renderTodos(todosArray);
})
showCompletedButton.addEventListener('click', () => {
   currentFilter = 'completed';
   renderTodos(todosArray);
})
searchInput.addEventListener('input', () => {
   renderTodos(todosArray);
})
input.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      addButton.click();
   }
})

function renderTodos(todos) {
   todoList.innerHTML = '';

   let filteredTodos = todos;
   if (currentFilter === 'completed') {
      filteredTodos = filteredTodos.filter(todo => todo.checked === true)
   }

   const searchText = searchInput.value.trim().toLowerCase();
   if (searchText !== '') {
      filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().includes(searchText))
   }

   const fragment = document.createDocumentFragment()
   filteredTodos.forEach(todo => {
      fragment.append(createTodoItem(todo));
   });
   todoList.append(fragment);
   calcAllTodo();
   calcCompleted();
}
function calcAllTodo() {
   counter.textContent = `All: ${todosArray.length}`
}
function calcCompleted() {
   completedCounter.textContent = `Completed: ${todosArray.filter(todo => todo.checked === true).length}`
}

renderTodos(todosArray);
root.insertAdjacentElement('afterbegin', container)