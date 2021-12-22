const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}
async function editAuthor(editedAuthor) {
    return await Authors.editAuthor(editedAuthor);
}
async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}
async function editCategory(editedCategory) {
    return await Categories.editCategory(editedCategory);
}
module.exports = {
    createAuthor,
    editAuthor,
    createCategory,
    editCategory
};