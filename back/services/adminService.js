const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');

//
// Book
//
async function createBook(newBook) {
    return await Books.createBook(newBook);
}
async function editBook(editedBook) {
    const { id, ...newBook } = editedBook;
    return await Books.editBook(newBook, editedBook.id);
}
//
// Author
//
async function createAuthor(newAuthor) {
    return await Authors.createAuthor(newAuthor);
}
async function editAuthor(editedAuthor) {
    const { id, ...newAuthor } = editedAuthor;
    return await Authors.editAuthor(newAuthor, editedAuthor.id);
}
//
// Category
//
async function createCategory(newCategory) {
    return await Categories.createCategory(newCategory);
}
async function editCategory(editedCategory) {
    const { id, ...newCategory } = editedCategory;
    return await Categories.editCategory(newCategory, editedCategory.id);
}
module.exports = {
    createBook,
    editBook,
    createAuthor,
    editAuthor,
    createCategory,
    editCategory
};