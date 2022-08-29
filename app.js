let myLibrary = ['harry', 'potter'];
//constructor
function Book() {
    
}

function addBookToLibrary() {
    
}

const displayBook = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        const p = document.createElement('p');
        p.textContent = myLibrary[i];
        console.log(p)
        document.getElementById('container').appendChild(p)
    }
    
}

displayBook();