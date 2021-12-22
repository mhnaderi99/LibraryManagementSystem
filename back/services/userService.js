const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

async function getAllBooks(page, booksInPage) {
    return await Books.getAllBooks(page, booksInPage);
}

async function getAllAuthors(page, authorsInPage) {
    return await Authors.getAllAuthors(page, authorsInPage);
}
async function getAuthorByName(name, page, authorsInPage) {
    return await Authors.getAuthorByName(name, page, authorsInPage);
}
async function getAuthorByNationality(nationality, page, authorsInPage) {
    return await Authors.getAuthorByNationality(nationality, page, authorsInPage);
}

async function getAllPublishers(page, publishersInPage) {
    return await Publishers.getAllPublishers(page, publishersInPage);
}

async function getAllCategories() {
    return await Categories.getAllCategories();
}
async function getCategoryByName(name, page, authorsInPage) {
    return await Authors.getAuthorByName(name, page, authorsInPage);
}

module.exports = {
    getAllBooks,
    getAllAuthors,
    getAuthorByName,
    getAuthorByNationality,
    getAllPublishers,
    getAllCategories,
    getCategoryByName
};