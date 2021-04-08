class Book {
  constructor(nameOfBook, author) {
    this.name = nameOfBook
    this.author = author
    this.pages = 3000
  }
  resolveISBN() {
    return `${this.name}-${this.pages}-${this.author}`
  }
  toString() { // OVERWRITING
    return `The book name is ${this.name}`
  }
}

module.exports = Book