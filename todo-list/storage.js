const todosStorageKey = 'todos';
export const saveTodosToLocalStorage = (todos) => {
   localStorage.setItem(todosStorageKey, JSON.stringify(todos));
}
export function getTodosFromLocalStorage() {
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