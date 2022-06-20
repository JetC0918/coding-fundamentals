class Library{
    constructor(name){
        this.name = name;
        this.book = [];
    }

    addBook(book){
        this.book.push(book)
    }

    getBooks(){
        let name = [];
        for (let book of this.book){
            name.push(book.name)
        }
        return name;
    }

    getBooksByCategory(category){
        let name = [];
        for (let book of this.book){
            if (book.category === category){
                name.push(book.name)
            }
        }
        return name;
    }
}

class Book{
    constructor(name, author, category){
        this.name = name;
        this.author = author;
        this.category = category;
    }
}

const library = new Library('ABC')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
const bookC = new Book('Book C', 'Mr. B', 'Horror')
library.addBook(bookA)
library.addBook(bookB)
library.addBook(bookC)

const allBooks = library.getBooks()
const horrorBooks = library.getBooksByCategory('Horror')

console.log(allBooks) // ['Book A', 'Book B', 'Book C']
console.log(horrorBooks) // ['Book C']