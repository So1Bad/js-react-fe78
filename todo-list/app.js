import { getTodosFromLocalStorage, saveTodosToLocalStorage } from './storage.js';
import { createDomElement, createTodoItem } from './dom.js';
const root = document.getElementById('root');

let todosArray = getTodosFromLocalStorage();

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
const fragment = document.createDocumentFragment();
fragment.append(deleteAllButton, input, addButton)
wrapper.prepend(fragment)
const todoList = createDomElement('div', {
   className: 'todo__list'
});
container.append(wrapper, todoList);

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

      item.classList.toggle('todo__item-done');
      if (target.classList.toggle('todo__complete-active')) {
         target.textContent = '✓';
      } else {
         target.textContent = '';
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
})

input.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      addButton.click();
   }
})

function renderTodos(todos) {
   todoList.innerHTML = '';
   const fragment = document.createDocumentFragment()
   todos.forEach(todo => {
      fragment.append(createTodoItem(todo));
   });
   todoList.append(fragment);
}
renderTodos(todosArray);
root.insertAdjacentElement('afterbegin', container)