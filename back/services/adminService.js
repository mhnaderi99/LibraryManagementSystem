const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}
async function editAuthor(editedAuthor) {
    const { id, ...newAuthor } = editedAuthor;
    return await Authors.editAuthor(newAuthor, editedAuthor.id);
}
async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}
async function editCategory(editedCategory) {
    const { id, ...newCategory } = editedCategory;
    return await Categories.editCategory(newCategory, editedCategory.id);
}
module.exports = {
    createAuthor,
    editAuthor,
    createCategory,
    editCategory
};