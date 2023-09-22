let bookCase = [];
let index = 0;
const display = document.querySelector('.show-case');
const popBox = document.querySelector('.pop-up');
class book{
    constructor(title, author, pages, readStatus, statusBtn, index){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.statusBtn = statusBtn;
        this.index = index;
    }
    changeStatus = function(){
        if(this.readStatus === 'Read' && this.statusBtn === 'green'){
            this.readStatus = 'Not Read';
            this.statusBtn = 'red'
    }
        else{
            this.readStatus = 'Read';
            this.statusBtn = 'green'
    }
    }
    updateIndex = function(){
        this.index = 0;
} 
}
function removeBook(index){
    bookCase.splice(index, 1);
}
function addBook(e){
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    let readStatus = '';
    let statusBtn = '';
    if(document.querySelector('#book-status').checked){
        readStatus = 'Read';
        statusBtn = 'green';
    }
    else{
        readStatus = 'Not Read';
        statusBtn = 'red';
    }
    let books = new book(title, author, pages, readStatus, statusBtn, index);
    bookCase.push(books);
    function displayBooks(){
            const div = document.createElement('div');
            const bookName = document.createElement('p');
            const bookAuthor = document.createElement('p');
            const bookPages = document.createElement('p');
            const bookStatus = document.createElement('button');
            const bookRemove = document.createElement('button');
            {
                bookName.textContent = `"${noteBook.title}"`;
                div.appendChild(bookName);
                bookName.classList.add('title');
                bookAuthor.textContent = `${noteBook.author}`;
                div.appendChild(bookAuthor);
                bookAuthor.classList.add('author');
                bookPages.textContent = `${noteBook.pages}`;
                div.appendChild(bookPages);
                bookPages.classList.add('pages');
                bookStatus.textContent = `${noteBook.readStatus}`;
                div.appendChild(bookStatus);
                bookStatus.setAttribute('type', 'button');
                bookStatus.addEventListener('click', (e) => {
                    bookCase[parseInt(e.target.value)].changeStatus();
                    display.innerHTML = '';
                    for(noteBook of bookCase){
                    displayBooks();
                    }
                });
                bookStatus.classList.add('status');
                bookStatus.style.backgroundColor = `${noteBook.statusBtn}`;
                bookStatus.setAttribute('value', `${noteBook.index}`);
                bookRemove.textContent = 'Remove';
                div.appendChild(bookRemove);
                bookRemove.classList.add('remove');
                bookRemove.addEventListener('click', (e) => {
                    removeBook(parseInt(e.target.value));
                    display.innerHTML = '';
                    for(let i = 0; i < bookCase.length; i++){
                            bookCase[i].updateIndex();
                            bookCase[i].index = i;
                        }
                        for(noteBook of bookCase){
                            displayBooks();
                        }
                });
                bookRemove.setAttribute('type', 'button');
                bookRemove.setAttribute('value', `${noteBook.index}`);
            }
            display.appendChild(div);
            div.classList.add('bookCard');
        } 
    e.preventDefault();
    display.innerHTML = '';
    for(noteBook of bookCase){
        displayBooks();
    }
    closePopUp();
    index += 1;
}
function openPopUp(){
        popBox.style.display = 'block';
}
function closePopUp(){
        popBox.style.display = 'none';
        clear();
}
function clear(){
        document.querySelector('#book-title').value ='';
        document.querySelector('#book-author').value ='';
        document.querySelector('#book-pages').value = '';
        document.querySelector('#book-status').checked = false;
}
document.querySelector('#submit-book').addEventListener('click', addBook, false);
document.querySelector('#btn-popUp').addEventListener('click', openPopUp);
document.querySelector('#close-pop').addEventListener('click', closePopUp);
