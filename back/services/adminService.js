const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');
const Users = require('./db/user');
const Inventories = require('./db/inventory');
const Payments = require('./db/payment');
const Penalties = require('./db/penalty');
const Subscriptions = require('./db/subscription');

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
    return await Publishers.createPublisher(newPublisher);
}
async function editPublisher(editedPublisher) {
    const { id, ...newPublisher } = editedPublisher;
    return await Publishers.editPublisher(newPublisher, editedPublisher.id);
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
    return await Users.createUser(newUser);
}
async function editUser(editedUser) {
    const { id, ...newUser } = editedUser;
    return await Users.editUser(newUser, editedUser.id);
}
async function deleteUser(userId) {
    return await Users.deleteUser(userId);
}
//
// Inventory
//
async function createInventoryItem(newItem) {
    return await Inventories.createInventoryItem(newItem);
}
async function editInventoryItem(editedItem) {
    const { id, ...newItem } = editedItem;
    return await Inventories.editInventoryItem(newItem, editedItem.id);
}
async function deleteInventoryItem(itemId) {
    return await Inventories.deleteInventoryItem(itemId);
}

//
// Payment
//
async function createPayment(newPayment) {
    return await Payments.createPayment(newPayment);
}

//
// Penalty
//
async function createPenalty(newPenalty) {
    return await Penalties.createPenalty(newPenalty);
}
async function editPenalty(editedPenalty) {
    const { id, ...newPenalty } = editedPenalty;
    return await Penalties.editPenalty(newPenalty, editedPenalty.id);
}

//
// Subscription
//
async function createSubscription(newSubscriptions) {
    return await Subscriptions.createSubscription(newSubscriptions);
}
async function editSubscription(editedSubscriptions) {
    const { id, ...newSubscriptions } = editedSubscriptions;
    return await Subscriptions.editSubscription(newSubscriptions, editedSubscriptions.id);
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
    deleteUser,
    createInventoryItem,
    editInventoryItem,
    deleteInventoryItem,
    createPayment,
    createPenalty,
    editPenalty,
    createSubscription,
    editSubscription
};