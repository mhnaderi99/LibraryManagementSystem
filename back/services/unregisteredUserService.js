const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

//
// Book
//
async function getAllBooks(page, booksInPage) {
    return await Books.getAllBooks(page, booksInPage);
}
async function getBookByTitle(bookTitle, page, booksInPage) {
    return await Books.getBookByTitle(bookTitle, page, booksInPage);
}
async function getBookByAuthor(bookAuthor, page, booksInPage) {
    return await Books.getBookByAuthor(bookAuthor, page, booksInPage);
}
async function getBookByCategory(bookCategory, page, booksInPage) {
    return await Books.getBookByCategory(bookCategory, page, booksInPage);
}
async function getBookByPublisher(bookPublisher, page, booksInPage) {
    return await Books.getBookByPublisher(bookPublisher, page, booksInPage);
}
async function getBookByYear(bookYear, page, booksInPage) {
    return await Books.getBookByYear(bookYear, page, booksInPage);
}
//
// Author
//
async function getAllAuthors(page, authorsInPage) {
    return await Authors.getAllAuthors(page, authorsInPage);
}
async function getAuthorByName(name, page, authorsInPage) {
    return await Authors.getAuthorByName(name, page, authorsInPage);
}
async function getAuthorByNationality(nationality, page, authorsInPage) {
    return await Authors.getAuthorByNationality(nationality, page, authorsInPage);
}
//
// Publisher
//
async function getPublisherByName(name, page, authorsInPage) {
    return await Publishers.getPublisherByName(name, page, authorsInPage);
}
async function getAllPublishers(page, publishersInPage) {
    return await Publishers.getAllPublishers(page, publishersInPage);
}
//
// Category
//
async function getAllCategories() {
    return await Categories.getAllCategories();
}
async function getCategoryByName(name, page, authorsInPage) {
    return await Categories.getCategoryByName(name, page, authorsInPage);
}

module.exports = {
    getAllBooks,
    getBookByTitle,
    getBookByAuthor,
    getBookByCategory,
    getBookByPublisher,
    getBookByYear,
    getAllAuthors,
    getAuthorByName,
    getAuthorByNationality,
    getPublisherByName,
    getAllPublishers,
    getAllCategories,
    getCategoryByName
};