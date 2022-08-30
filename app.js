let myLibrary = [];
//constructor
function Book() {
    
}

function addBookToLibrary() {
    button.removeEventListener('click', addBookToLibrary);
}

function addForm() {
    const form = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        form.appendChild(input);        
    }
    container.appendChild(form);
    button.removeEventListener('click', addForm);
}

const displayBook = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        const p = document.createElement('p');
        p.textContent = myLibrary[i];
        console.log(p);
        container.appendChild(p);
    }
    
}

const container = document.getElementById('container');
const button = document.querySelector("#container > button");

button.addEventListener('click', addForm);