let id = localStorage.getItem('postId');
console.log(id);

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('post');

console.log(myParam);

