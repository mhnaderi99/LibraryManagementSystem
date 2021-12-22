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

async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}


async function getAllPublishers(page, publishersInPage) {
    return await Publishers.getAllPublishers(page, publishersInPage);
}

async function getAllCategories() {
    return await Categories.getAllCategories();
}

async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}

module.exports = {
    getAllBooks,
    getAllAuthors,
    createAuthor,
    getAllCategories,
    getAllPublishers,
    createCategory
};