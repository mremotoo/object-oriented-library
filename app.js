let myLibrary = [];
//constructor
function Book() {}

function addBookToLibrary(e) {
  
  console.log(document.querySelector("#title").value);
}

function formCheck() {
  //...
}

function addForm(e) {
  buttonBringForm.style.display = "none";
  form.style.display = "block";
  submitForm.style.display = "block";
}

function hideElementsUponLoad() {
  form.style.display = "none";
  submitForm.style.display = "none";
}

const displayBook = () => {
  // for (let i = 0; i < myLibrary.length; i++) {
  //     const p = document.createElement('p');
  //     p.textContent = myLibrary[i];
  //     console.log(p);
  //     container.appendChild(p);
  // }
};

//element vars
const container = document.getElementById("container");
const buttonBringForm = document.querySelector("#bring-form");
const form = document.querySelector("#container > form");
const submitForm = document.getElementById("submit-form");

//event listeners
buttonBringForm.addEventListener("click", addForm);
submitForm.addEventListener("click", addBookToLibrary)

hideElementsUponLoad();
