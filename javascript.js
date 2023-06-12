const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const library = document.getElementById("library");
const isRead = document.getElementById("isRead");
const title = document.getElementById("title");
const author = document.getElementById("author");


//Array of book objects
let myLibrary = [];



// Constructor function
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    addBookForm.reset();
};

function displaycards() {
    library.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        if (book === undefined) {
            continue
        }
        const newCard = document.createElement('card');
        newCard.classList.add('book');

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('bookTitle');
        cardTitle.textContent = book.title

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('bookAuthor');
        cardAuthor.textContent = book.author

        const cardReadBtn = document.createElement('button');
        if (book.isRead === "read") {
            cardReadBtn.classList.add('readBtn');
            cardReadBtn.classList.add('read');
            cardReadBtn.textContent = "Read";
        } else if (book.isRead === "notRead") {
            cardReadBtn.classList.add('readBtn');
            cardReadBtn.classList.add('notRead');
            cardReadBtn.textContent = "Not Read";
        };

        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.classList.add('deleteBtn');
        cardDeleteBtn.textContent = "Delete";

        newCard.appendChild(cardTitle);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardReadBtn);
        newCard.appendChild(cardDeleteBtn);

        cardReadBtn.addEventListener("click", () => {
            if (book.isRead === "read") {
                book.isRead = "notRead";
                cardReadBtn.classList.remove('read');
                cardReadBtn.classList.add('notRead');
                cardReadBtn.innerText = "Not Read"
            } else {
                book.isRead = "read";
                cardReadBtn.classList.remove('notRead');
                cardReadBtn.classList.add('read');
                cardReadBtn.innerText = "Read"
            }
        });

        cardDeleteBtn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displaycards();
        });

        library.appendChild(newCard);
    };
};

function addBook(title, author, isRead) {
    const newBook = new Book(title, author, isRead);
    myLibrary.push(newBook);
};


addBookBtn.addEventListener("click", (e) => {
    addBookForm.classList.remove("hidden");
    library.classList.add("fade");
});


addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookIsRead = isRead.checked ? "read" : "notRead";
    addBook(bookTitle, bookAuthor, bookIsRead);
    displaycards();
    addBookForm.classList.add("hidden");
    library.classList.remove("fade");
});