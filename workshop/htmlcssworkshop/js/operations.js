

function addBook(){
            document.getElementById('render').innerHTML = ` 
                <center>
                        <form id="book-form" >
                            <div class="form-group ">
                                <label for="bookId">BookId</label>
                                <div class="col-sm-10">
                                    <input type="number" id="bookId" class="form-control" /><br/></div><br>
                                </div>
                            </div>
                            <div class="form-group ">
                                <label for="title">Title</label>
                                <div class="col-sm-10">
                                    <input type="text" id="title" class="form-control" placeholder="Title">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="bookName">BookName</label>
                                <div class="col-sm-10">
                                    <input type="text" id="bookName" class="form-control" placeholder="Book Name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <div class="col-sm-10">
                                    <input type="number" id="price" class="form-control" /><br/></div><br>
                                </div>
                            </div><br>
                            
                            <div><button id="btn-add" type="submit" >AddBook</button><br/></div>
                        </form>    
                </center>
            `
        };

        function removeBook(){
            document.getElementById('render').innerHTML = ` 
                <center>
                        <form>
                            <div id="bookId">BookId: 
                                <input type="number"/><br/></div><br>
                            <div><button id="btn-rem" onclick="remove()">RemBook</button><br/></div>
                        </form>    
                </center>
            `
        };

        function bookList(){
            document.getElementById('render').innerHTML = ` 
                <center>
                        <table class="table table-stripped>
                            <tr>
                                <th>BookId: <br/></th><br>
                                <th>Title: <br/></th><br>
                                <th>BookName: <br/></th><br>
                                <th>Price: <br/></th><br> 
                            </tr>
                            <tbody id="book-list"></tbody> 
                        </table>
                        <script src="../js/classBook.js"></script>    
                </center>
            `
        };

        function modifyBook(){
            document.getElementById('render').innerHTML = ` 
                <center>
                        <div id="modify">
                            <form>
                                <div>BookName: <input type="text" maxlength="10" placeholder="write Book name..."/><br/></div><br>
                                <div>Address: <input type="text" placeholder="..."/><br/></div><br>
                                <div>No. of Books to order: 
                                    <input type="number" min="0" max="10"/>(1 - 10)<br/></div><br>
                                <div><button>submit</button><br/></div>
                            </form>
                        </div>    
                </center>
            `
        };