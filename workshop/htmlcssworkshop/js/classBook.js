//Book Class
class Book {
    constructor(bookId,title, name, price){
        this.bookId = bookId;
        this.title = title;
        this.name = name;
        this.price = price;
    }
}

class UI {
    static displayBooks(){
        const StoredBooks = [{
            bookId: '101',
            title: 'on mission',
            name: 'The last Mission',
            price: '5'
        },
        {
            bookId: '102',
            title: 'Mystery',
            name: 'The quest of Missing Map',
            price: '7'
        }
      ];

      const books = StoredBooks;
      
      books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.bookId}</td>
            <td>${book.title}</td>
            <td>${book.name}</td>
            <td>${book.price}</td>
        `;
        list.appendChild(row);
    }
}

//Display Books
document.addEventListener('DomContentLoaded', UI.displayBooks);

//Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent actual submit
    e.preventDefault();

    //get form values
    const bookId = document.querySelector('#bookId').value;
    const title = document.querySelector('#title').value;
    const name = document.querySelector('#bookName').value;
    const price = document.querySelector('#price').value;

    //Instantiate Book
    const book = new Book(bookId, title, name, price);

    console.log(book);
});