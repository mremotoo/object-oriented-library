let myLibrary = [];
//constructor
function Book() {}

function addBookToLibrary() {
  const input = document.getElementsByClassName("book-input");
  for (let i = 0; i < input.length; i++) {
    myLibrary.push(input.item(i).value);
  }
  displayBook();
}

function formCheck() {
  //...
}

function addForm(e) {
  btnBringForm.style.display = "none";
  form.style.display = "block";
  btnsubmitForm.style.display = "block";
}

function hideElementsOnLoad() {
  form.style.display = "none";
  btnsubmitForm.style.display = "none";
}

function clearLibrary() {
  myLibrary = [];
}

const displayBook = () => {
  const p = document.createElement("p");
  p.textContent = myLibrary;
  console.log(p);
  display.appendChild(p);
  clearLibrary();
};

//elements
const container = document.getElementById("container");
const btnBringForm = document.querySelector("#bring-form");
const form = document.querySelector("#container > form");
const btnsubmitForm = document.getElementById("submit-form");
const display = document.getElementById("display-container");

//listeners
btnBringForm.addEventListener("click", addForm);
btnsubmitForm.addEventListener("click", addBookToLibrary);

hideElementsOnLoad();

// Todo:
// fix display to display values from array separately

// Pending as per project:
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is  giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
// NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.