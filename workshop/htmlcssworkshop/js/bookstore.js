class BookStore {
    constructor(bookId,title, name, price){
        this.bookId = bookId;
        this.title = title;
        this.name = name;
        this.price = price;
    }
}

class Display {
    add(book) {
        let tableBody = document.getElementById('render');
        let uiString = `<tr>
                            <td>${book.bookId}</td>
                            <td>${book.title}</td>
                            <td>${book.name}</td>
                            <td>${book.price}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('book-Form');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
}



function bookFormSubmit(e) {
    let bookId = document.getElementById('bookId').value;
    let title = document.getElementById('title').value;
    let name = document.getElementById('bookName').value;
    let price = document.getElementById('price').value;
    let book = new Book(bookId, title, name, price);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}

// Add submit event listener to libraryForm
let bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', bookFormSubmit);