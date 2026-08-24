const root = document.getElementById('root');

const todosStorageKey = 'todos';
let todosArray = getTodosFromLocalStorage();

const saveTodosToLocalStorage = (todos) => {
   localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}
function getTodosFromLocalStorage() {
   const todosFromStorage = localStorage.getItem(todosStorageKey)
   if (!todosFromStorage) {
      return [];
   }
   try {
      return JSON.parse(todosFromStorage);
   } catch (error) {
      console.log('Parsing error', error);
      return [];
   }
}

const createDomElement = (tag, options) => {
   const newElement = document.createElement(tag);
   if (options.className) {
      newElement.className = options.className
   }
   if (options.textContent) {
      newElement.textContent = options.textContent
   }
   if (options.placeholder) {
      newElement.placeholder = options.placeholder
   }
   return newElement
}
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

const createTodoItem = (todoObj) => {
   const item = createDomElement('div', {
      className: 'todo__item'
   })
   item.dataset.id = todoObj.id;
   const completeButton = createDomElement('button', {
      className: 'todo__completeBtn',
      textContent: ''
   })
   if (todoObj.checked) {
      item.classList.add('todo__item-done')
      completeButton.classList.add('todo__complete-active')
      completeButton.textContent = '✓'
   }
   const todoText = createDomElement('p', {
      className: 'todo__text',
      textContent: todoObj.text
   });
   const rightBlock = createDomElement('div', {
      className: 'todo__rightBlock'
   });
   const deleteButton = createDomElement('button', {
      className: 'todo__deleteBtn',
      textContent: 'X'
   });
   const date = createDomElement('div', {
      className: 'todo__date',
      textContent: todoObj.date
   });
   rightBlock.append(deleteButton, date);
   item.append(completeButton, todoText, rightBlock);
   return item;
}


todoList.addEventListener('click', (e) => {
   const target = e.target;
   const item = target.closest('.todo__item');

   if (!item) return;

   if (target.classList.contains('todo__deleteBtn')) {
      todosArray = todosArray.filter(todo => {
         return todo.id != item.dataset.id
      })
      saveTodosToLocalStorage(todosArray)
      item.remove();
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

wrapper.addEventListener('click', (e) => {
   if (e.target.classList.contains('addBtn')) {
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
   if (e.target.classList.contains('deleteAllBtn')) {
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
   todosArray.forEach(todo => {
      fragment.append(createTodoItem(todo));
   });
   todoList.append(fragment);
}
renderTodos(todosArray);
root.insertAdjacentElement('afterbegin', container)