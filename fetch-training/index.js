let todoArr = [];
const todoUl = document.getElementById('todoUl');
function getTodos() {
   fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
      if (!res.ok) {
         throw new Error(res.status);
      }
      return res.json();
   }).then(res => {
      todoArr = res;
      printTodos();
   }).catch(err => {
      console.log(err)
   });
}
function printTodos() {
   if (!todoUl) {
      console.log('Список ul не найден')
      return;
   }
   todoUl.innerHTML = '';
   const fragment = document.createDocumentFragment();
   todoArr.forEach(todo => {
      const li = document.createElement('li')
      li.textContent = todo.id + ' ' + todo.title;
      li.style.listStyleType = 'none';
      fragment.append(li);
   })
   todoUl.append(fragment);
}
getTodos()
