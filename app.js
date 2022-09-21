const addNewBook = document.getElementById("new-btn");
const cancel = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const library = document.getElementById("library");
const numBooks = document.getElementById("num-books");
const domRmBtns = document.querySelectorAll("rm-btn")
const books = [];

//displaying form and hiding it
addNewBook.addEventListener("click", function(){
    let form = document.getElementById("formDom");
    form.style.display = "flex";
});
cancel.addEventListener("click", function(){
    let form = document.getElementById("formDom");
    form.style.display = "none";
});

const form = {
    title: document.getElementById("title"),
    author: document.getElementById("author"),
    pages: document.getElementById("pages"),
    readNo: document.getElementById("readNo"),
    readYes: document.getElementById("readYes")
}

form.readNo.addEventListener("click", function(){
    form.readNo.setAttribute("checked", true)
})
form.readYes.addEventListener("click", function(){
    form.readYes.setAttribute("checked", true)
})


function newBook(title,author,pages,read) {
    this.title = title;
    this.author  = author;
    this.pages = pages;     
    this.read = read; 
}

const displayBooks =(ev)=> {
    ev.preventDefault();
    while (library.hasChildNodes()) {
        library.removeChild(library.firstChild);
    }
    books.forEach(book => {
        let cover = document.createElement("div");
        cover.classList.add("book");
        cover.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <label>Read: </label>
        <input type="checkbox" class="read" value="${book.read}">
        <button id="rm-btn">X</button>
        `;
        library.appendChild(cover);
    })
    for(let i = 0; i < books.length; i++) {
        let child = library.children[i];
        library.children[i].dataset.index = i;
        child.children[5].dataset.index = i;
    }
}

const addBook = (ev) => {
    ev.preventDefault();
    let read;
    if(form.readNo.checked === 'checked' && form.readYes.checked === ''){
        read = false
    }
    else if(form.readNo.checked === '' && form.readYes.checked === 'checked') {
        read = true
    }
    const book = new newBook(form.title.value, form.author.value, read);
    books.push(book);
}


const removeBook = () => {
    let rmBtns = document.querySelectorAll("#rm-btn");
    rmBtns.forEach(btn => {
        btn.addEventListener("click", function(){
            console.log(library.length);
            for(let i = 0; i < books.length; i++) {
                let child = library.children[i];
                library.children[i].dataset.index = i;
                child.children[5].dataset.index = i;
            }
            console.log(books.length)
            if(btn.parentNode.dataset.index === btn.dataset.index) {
                books.splice(library.children[btn.dataset.index],1);
                library.removeChild(library.children[btn.dataset.index]);
            }   
})})
}

const clearForm = function(ev) {
    ev.preventDefault();
    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
    let formDom = document.getElementById("formDom");
    formDom.style.display = "none";
}


submitBtn.addEventListener("click", addBook);
submitBtn.addEventListener("click", displayBooks);
submitBtn.addEventListener("click", removeBook);
submitBtn.addEventListener("click", clearForm);









