const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');
const db = require('../config/registered_user_db');
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

async function borrowBook(inventory_id, userid) {
    const query = `CALL public.borrow_inventory(${inventory_id},${userid});`
    return db.query(query).then((success) => {
            console.log(success);
            return success;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

async function returnBook(inventoryid, userid) {
    const query = `CALL public.return_inventory(${inventoryid},${userid});`
    return db.query(query).then((success) => {
            console.log(success);
            return success;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}
async function extendSubscription() {
    // TODO: extend subscription
}
async function payForPenalty() {
    // TODO: pay for penalty
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
    getCategoryByName,
    borrowBook,
    returnBook
};