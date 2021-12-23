const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');
const Users = require('./db/user');

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
async function deleteBook(bookId) {
    return await Books.deleteBook(bookId);
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
async function deleteAuthor(authorId) {
    return await Authors.deleteAuthor(authorId);
}
//
// Publisher
//
async function createPublisher(newPublisher) {
    return await Publishers.createAuthor(newPublisher);
}
async function editPublisher(editedPublisher) {
    const { id, ...newPublisher } = editedPublisher;
    return await Publishers.editAuthor(newPublisher, editedPublisher.id);
}
async function deletePublisher(publisherId) {
    return await Publishers.deletePublisher(publisherId);
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
async function deleteCategory(categoryId) {
    return await Categories.deleteCategory(categoryId);
}
//
// User
//
async function createUser(newUser) {
    return await Users.createCategory(newUser);
}
async function editUser(editedUser) {
    const { id, ...newUser } = editedUser;
    return await Users.editCategory(newUser, editedUser.id);
}
async function deleteUser(userId) {
    return await Users.deleteCategory(userId);
}
module.exports = {
    createBook,
    editBook,
    deleteBook,
    createAuthor,
    editAuthor,
    deleteAuthor,
    createPublisher,
    editPublisher,
    deletePublisher,
    createCategory,
    editCategory,
    deleteCategory,
    createUser,
    editUser,
    deleteUser
};