const Books = require('./db/book');

async function getAllBooks(page, booksInPage) {
    return await Books.getAllBooks(page, booksInPage);
}

module.exports = {
    getAllBooks
};