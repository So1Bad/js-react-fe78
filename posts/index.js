const postsContainer = document.getElementById('posts');

function loadPost(id) {
   return fetch(`${URL}/${id}`)
      .then((response) => {
         if (!response.ok) {
            throw new Error(`Ошибка загрузки поста ${id}: ${response.status}`);
         }
         return response.json();
      })
}

function renderPostText(postArr) {
   if (!postsContainer) {
      return
   }
   postsContainer.innerHTML = '';
   const fragment = document.createDocumentFragment();
   postArr.forEach(element => {
      const container = document.createElement('div')
      const title = document.createElement('h2')
      title.classList.add('posts__title')
      const text = document.createElement('p')
      text.classList.add('posts__text')
      title.textContent = element.title;
      text.textContent = element.body;
      container.append(title, text)
      fragment.append(container)
   });
   postsContainer.append(fragment);

}
const postIds = [15, 23, 7, 3, 8, 17, 25, 55];
let postArr = [];
const URL = 'https://jsonplaceholder.typicode.com/posts';

postIds.reduce((promise, id) => {
   return promise
      .then(() => loadPost(id))
      .then((response) => {
         postArr.push(response)
      })
      .catch(error => {
         console.error(error);
      });
}, Promise.resolve())
   .then(() => {
      renderPostText(postArr)
   });


async function loadAndRenderPosts() {
   try {
      const promises = postIds.map(id => loadPost(id));

      const posts = await Promise.allSettled(promises);
      const successfulPosts = posts.filter(result => result.status === 'fulfilled').map(result => result.value);
      console.log(successfulPosts);
      console.log(posts)
      renderPostText(successfulPosts);
   } catch (error) {
      console.error("Произошла ошибка при загрузке:", error);
   }
}
loadAndRenderPosts()

