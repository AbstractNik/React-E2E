// script.js

// Starter data
const books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "The Cyberiad", author: "Stanislaw Lem" }
  ];
  
  // Functions
  function getBooks() {
    return books;
  }
  
  function getBook(id) {
    return books.find(book => book.id === id);
  }
  
  // Practice destructuring
  const book = getBook(2);
  const { title, author } = book;
  
  console.log(title, author);
 