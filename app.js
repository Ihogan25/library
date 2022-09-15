const newBook = document.getElementById('new-book');
const submit = document.getElementById('submit');
const domBooks = document.querySelectorAll('.book');
const formDom = document.getElementById('form');
const cancel = document.getElementById('cancel');
const library = document.querySelector('.books');
const numberBooks = document.getElementById('num-books')
const books = [];

for(let i = 0; i < domBooks.length; i++) {
    books.push(domBooks[i]);
    console.log(books);
}   
numberBooks.textContent = `Number Of Books: ${books.length}`;
newBook.addEventListener('click', function(){
        formDom.style.opacity = '100%';
});
cancel.addEventListener('click', function(){
    formDom.style.opacity = '0%';
});

const form = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    'read book': document.getElementById('read-book').value
};

function book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBook (bookName){

    books.push(bookName);
};

submit.addEventListener('submit', function(){

    let book = new book(form.title, form.author, form.pages, form['read book']);

    addBook(book);
});

console.log(books);



