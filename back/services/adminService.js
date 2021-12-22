const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}
async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}

module.exports = {
    createAuthor,
    createCategory,
};