class Book {
    constructor(bookId,title, name, price){
        this.bookId = bookId;
        this.title = title;
        this.name = name;
        this.price = price;
    }

    submitBook() {
       document.querySelector('#book-form').addEventListener('submit', (e) => {
        
          e.preventDefault();

           const bookId = document.querySelector('#bookId').value;
           const title = document.querySelector('#title').value;
           const name = document.querySelector('#name').value;
           const price = document.querySelector('#price').value;
           const addBtn = document.querySelector('#btn-add').value;

           const book = new Book(bookId,title, name, price);

           console.log(book);
       })
    }
}

                            // <div id="bookId">BookId: 
                            //     <input type="number"/><br/></div><br>
                            // <div id="title">Title:  <input type="text" placeholder="write title..."/><br/></div>
                            // <br>
                            // <div id="bookName">BookName: <input type="text" maxlength="25" placeholder="write Book name..."/><br/></div><br>
                            // <div id="price">Price: 
                            //     <input type="number"/><br/></div><br>
