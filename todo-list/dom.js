export const createDomElement = (tag, options) => {
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

export const createTodoItem = (todoObj) => {
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