const root = document.getElementById('root');

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

const createTodoItem = (text) => {
   const item = createDomElement('div', {
      className: 'todo__item'
   })
   const completeButton = createDomElement('button', {
      className: 'todo__completeBtn',
      textContent: ''
   })
   const todoText = createDomElement('p', {
      className: 'todo__text',
      textContent: text
   });
   const rightBlock = createDomElement('div', {
      className: 'todo__rightBlock'
   });
   const deleteButton = createDomElement('button', {
      className: 'todo__deleteBtn',
      textContent: 'X'
   });
   const currentDate = new Date().toLocaleDateString();
   const date = createDomElement('div', {
      className: 'todo__date',
      textContent: currentDate
   });
   rightBlock.append(deleteButton, date);
   item.append(completeButton, todoText, rightBlock);
   return item;
}

todoList.addEventListener('click', (e) => {
   const target = e.target;
   console.log(e.target);

   const item = target.closest('.todo__item');
   console.log('item', item);

   if (!item) return;

   if (target.classList.contains('todo__deleteBtn')) {
      item.remove();
   }

   if (target.classList.contains('todo__completeBtn')) {
      item.classList.toggle('todo__item-done');
      target.classList.toggle('todo__complete-active');
      if (target.classList.contains('todo__complete-active')) {
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

      const newTodo = createTodoItem(todoText);
      todoList.append(newTodo);

      input.value = '';
   }
   if (e.target.classList.contains('deleteAllBtn')) {
      todoList.replaceChildren();
   }
})
input.addEventListener('keydown', (e) => {
   if (e.key === 'Enter') {
      addButton.click();
   }
})

root.insertAdjacentElement('afterbegin', container)