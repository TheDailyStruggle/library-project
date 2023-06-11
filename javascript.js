const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const library = document.getElementById("library");


//Array of book objects
let myLibrary = [];



// Constructor function
function book(newTitle, newAuthor, newStatus) {
    const newBook = {
        title: newTitle,
        author: newAuthor,
        status: newStatus,
    }

    myLibrary.push(newBook);
};




function addBook() {

};


addBookBtn.addEventListener("click", (e) => {
    console.log("Clicked book btn");
    addBookForm.classList.remove("hidden");
    library.classList.add("fade");
});