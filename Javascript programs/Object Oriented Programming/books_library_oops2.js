// added sold in data set.
// errors in code to be corrected

class BookLibrary {
    getBooks() {
        let books = {

            "The Alchemist": { book_name: "The Alchemist", author: "Paulo", price: 200, no_copies: 20, sold: 5 },
            "Don": { book_name: "Don", author: "Paulo", price: 230, no_copies: 30, sold: 15 },
            "Batman": { book_name: "Batman", author: "Rocky", price: 350, no_copies: 12, sold: 9 },
            "Superman": { book_name: "Superman", author: "Sibi", price: 340, no_copies: 16, sold: 13 }
        }
        return books
    }
    findBooks(book_name) {
        let bookDetails = this.getBooks()
        if (book_name in bookDetails) {
            return 1

        }
        else {
            return 0
        }
    }
    findAvailCopies(book_name) {
        let bookDetails = this.getBooks()
        if (book_name in bookDetails) {
            let availableCopies = bookDetails[book_name]["no_copies"] - bookDetails[book_name]["sold"]
            console.log(`Available copies of ${book_name} is ${availableCopies}`);
        }
        else {
            console.log("No copies available");
        }
    }
    highestSold() {
        
    }

}

let BooksLib = new BookLibrary
let searchBookname = BooksLib.findBooks("Batman")
let res = searchBookname == 0 ? "Book not availabe" : "Book is available"
console.log(res);
BooksLib.findAvailCopies("Superman")
BooksLib.highestSold()