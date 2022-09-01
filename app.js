let myLibrary = [];
//constructor
function Book() {}

function addBookToLibrary(e) {
  console.log(e.target);
}

function formCheck() {
  if (
    document.querySelector("#container > form > input[type=text]:nth-child(1)")
  ) {
    console.log(
      document.querySelector(
        "#container > form > input[type=text]:nth-child(1)"
      ).value
    );
  }
}

function addForm(e) {
  buttonBringForm.style.display = "none";
  form.style.display = "block";
  submit.style.display = "block";
}

function hideElements() {
  form.style.display = "none";
  submit.style.display = "none";
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
const submit = document.getElementById("submit-form");

//event listeners
buttonBringForm.addEventListener("click", addForm);

hideElements();
