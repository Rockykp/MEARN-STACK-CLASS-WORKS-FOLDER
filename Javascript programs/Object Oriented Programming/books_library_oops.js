class BookLibrary {

    getBooks() {
        let books = {
            "The Alchemist": { book_name: "The Alchemist", author: "Paulo", price: 200, no_copies: 20 },
            "Don": { book_name: "Don", author: "Paulo", price: 230, no_copies: 30 },
            "Batman": { book_name: "Batman", author: "Rocky", price: 350, no_copies: 12 },
            "Superman": { book_name: "Superman", author: "Sibi", price: 340, no_copies: 16 }
        }
        return books
    }
    findBook(book_name) {
        let bookDetails = this.getBooks();
        if (book_name in bookDetails) {
            return 1;
        }
        else {
            return 0;
        }

    }
}

let BooksLib = new BookLibrary();
let searchBookName = BooksLib.findBook("Batman")
let res = searchBookName == 0 ? "Book is not available" : "Book is available"
console.log(res);
