const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}
async function editAuthor(authorId, editedAuthor) {
    return await Authors.editAuthor(editedAuthor, authorId);
}
async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}
async function editCategory(categoryId, editedCategory) {
    return await Categories.editCategory(editedCategory, categoryId);
}
module.exports = {
    createAuthor,
    editAuthor,
    createCategory,
    editCategory
};