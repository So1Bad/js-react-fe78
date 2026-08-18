const root = document.getElementById('root');

const createDomElement = (tag, options) => {
   const newElement = document.createElement(tag);
   if (options.className) {
      newElement.classList.add(options.className)
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
root.insertAdjacentElement('afterbegin', container);
const wrapper = createDomElement('div', {
   className: 'todo__wrapper'
})
container.insertAdjacentElement('afterbegin', wrapper);
console.log(container);
const deleteAllButton = createDomElement('button', {
   className: 'todo__button',
   textContent: 'Delete All'
})
const input = createDomElement('input', {
   className: 'todo__input',
   placeholder: 'Enter todo ...'
})
const addButton = createDomElement('button', {
   className: 'todo__button',
   textContent: 'Add'
})
const fragment = document.createDocumentFragment();
fragment.append(deleteAllButton, input, addButton)
wrapper.prepend(fragment)
const todoList = createDomElement('div', {
   className: 'todo__list'
});
container.append(todoList);

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
   deleteButton.addEventListener('click', () => item.remove());
   completeButton.addEventListener('click', () => {
      item.classList.toggle('todo__item-done')
      completeButton.classList.toggle('todo__complete-active');
      if (completeButton.classList.contains('todo__complete-active')) {
         completeButton.textContent = '✓';
      } else {
         completeButton.textContent = '';
      }
   });

   return item;
}
addButton.addEventListener('click', () => {
   const todoText = input.value.trim();

   if (todoText === '') {
      alert('Введите текст задачи!');
      return;
   }

   const newTodo = createTodoItem(todoText);
   todoList.append(newTodo);

   input.value = '';
});
deleteAllButton.addEventListener('click', () => {
   todoList.replaceChildren();
})