let bookCase = [];
let display = document.querySelector('.show-case');
let i;
function book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}
function addBook(e){
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    let readStatus = '';
    if(document.querySelector('#book-status').checked){
        readStatus = 'Read';
    }
    else{
        readStatus = 'Not Read';
    }
    let books = new book(title, author, pages, readStatus);
    bookCase.push(books);
    for(i = 0; i< bookCase.length; i++){
    } 
    e.preventDefault();
    console.log(bookCase);
}
document.querySelector('#submit-book').addEventListener('click', addBook, false);
function displayBooks(){
    let div = document.createElement('div');
        {
            let bookName = document.createElement('p');
            bookName.textContent = `"${bookCase[i].title}"`;
            div.appendChild(bookName);
            bookName.classList.add('title');
            let bookAuthor = document.createElement('p');
            bookAuthor.textContent = `${bookCase[i].author}`;
            div.appendChild(bookAuthor);
            bookAuthor.classList.add('author');
            let bookPages = document.createElement('p');
            bookPages.textContent = `${bookCase[i].pages}`;
            div.appendChild(bookPages);
            bookPages.classList.add('pages');
            let bookStatus = document.createElement('button');
            bookStatus.textContent = `${bookCase[i].readStatus}`;
            div.appendChild(bookStatus);
            bookStatus.setAttribute('type', 'button');
            bookStatus.classList.add('status');
            let bookRemove = document.createElement('button');
            bookRemove.textContent = 'Remove';
            div.appendChild(bookRemove);
            bookRemove.classList.add('remove');
            bookRemove.setAttribute('type', 'button');
        }
        display.appendChild(div);
        div.classList.add('bookCard');
    }