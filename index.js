


debugger
function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  // .then((json) => console.log(json));
  .then((json) => renderBooks(json));
}
// I need to iterate an object above for just the name of the books

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
