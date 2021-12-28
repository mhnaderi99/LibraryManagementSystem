const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');
const Users = require('./db/user');
const Inventories = require('./db/inventory');
const Payments = require('./db/payment');
const Penalties = require('./db/penalty');
const Subscriptions = require('./db/subscription');
const Records = require('./db/record');

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

//
// Record
//
async function createRecord(newRecord) {
    return await Records.createRecord(newRecord);
}
async function editRecord(editedRecord) {
    const { id, ...newRecord } = editedRecord;
    return await Records.editRecord(newRecord, editedRecord.id);
}
//
// managerial reports
//
// Most popular books
async function getMostPopularBooks() {
    const query = `SELECT books.title, count(books.id) from (SELECT records.id as record_id, records.inventory_id, inventories.book_id FROM records inner join inventories
        on records.inventory_id = inventories.id
        where borrow_date > '2020-12-21' and borrow_date < '2021-12-28') as tmp
        inner join books on tmp.book_id = books.id group by books.id order by count desc;`;
    return db.query(query);
}
// Most popular authors
async function getMostPopularAuthors() {
    const query = `SELECT concat(authors.firstname, ' ', authors.lastname) as author_name, count(id) from (SELECT books.id as book_id, books.author_id from (SELECT records.id as record_id, records.inventory_id, inventories.book_id FROM records inner join inventories
        on records.inventory_id = inventories.id
        where borrow_date > '2020-12-21' and borrow_date < '2021-12-28') as tmp
        inner join books on tmp.book_id = books.id) as tmp2 inner join authors on tmp2.author_id = authors.id
        group by id order by count desc;`;
    return db.query(query);
}

// Income report in by date
async function getIncomeReport() {
    const query = `select extract (year from payment_date) as yyear,
    extract (month from payment_date) as mmonth,
    extract (day from payment_date) as dday,
    sum (amount)
    from payments
    group by rollup(yyear, mmonth, dday);`;
    return db.query(query);
}

// Most active users
async function getMostActiveUsers() {
    const query = `select users.id, concat(users.firstname, ' ', users.lastname) as name, count(users.id) from (select subscriptions.user_id from records inner join subscriptions
        on records.subscription_id = subscriptions.id) as tmp inner join users
        on tmp.user_id = users.id group by (users.id) order by count desc;`;
    return db.query(query);
}

// Most popular categories
async function getMostPopularCategories() {
    const query = `SELECT categories.name, count(id) from (SELECT books.id as book_id, books.category_id from (SELECT records.id as record_id, records.inventory_id, inventories.book_id FROM records inner join inventories
        on records.inventory_id = inventories.id
        where borrow_date > '2020-12-21' and borrow_date < '2021-12-28') as tmp
        inner join books on tmp.book_id = books.id) as tmp2 inner join categories on tmp2.category_id = categories.id
        group by id order by count desc;`;
    return db.query(query);
}

// Most popular publishers
async function getMostPopularPublishers() {
    const query = `SELECT publishers.name, count(id) from (SELECT books.id as book_id, books.publisher_id from (SELECT records.id as record_id, records.inventory_id, inventories.book_id FROM records inner join inventories
        on records.inventory_id = inventories.id
        where borrow_date > '2020-12-21' and borrow_date < '2021-12-28') as tmp
        inner join books on tmp.book_id = books.id) as tmp2 inner join publishers on tmp2.publisher_id = publishers.id
        group by id order by count desc;`;
    return db.query(query);
}

// average time taken from people to read each book
async function getAverageTimeToReadBook() {
    const query = `select tmp.book_id, books.title, avg(tmp.time) over(
        partition by tmp.book_id
    )
    from (select inventories.book_id, extract(day from records.return_date - records.borrow_date) as time from records inner join inventories
    on records.inventory_id = inventories.id) as tmp inner join books on tmp.book_id = books.id;`;
    return db.query(query);
}

// Users with unreturned books + sum of penalty so far
async function getUnreturnedBooksAndPenalties() {
    const query = `select user_id, name, sum(penalty_so_far) as penalty_sum from 
    (select users.id as user_id, 
           concat(users.firstname, ' ', users.lastname) as name,
           inventories.id as inventory_id,
           books.title,
           records.borrow_date,
           records.borrow_date + (interval '1' day * inventories.loan_period) as due_date,
           extract (day from current_timestamp - (records.borrow_date + (interval '1' day * inventories.loan_period))) as days_late,
           extract (day from current_timestamp - (records.borrow_date + (interval '1' day * inventories.loan_period))) * inventories.delay_penalty as penalty_so_far
    from users inner join subscriptions on subscriptions.user_id = users.id
    inner join records on records.subscription_id = subscriptions.id
    inner join inventories on records.inventory_id = inventories.id
    inner join books on inventories.book_id = books.id
    where return_date is null and
    records.borrow_date + (interval '1' day * inventories.loan_period) < current_timestamp)
    
    group by (user_id, name);`;
    return db.query(query);
}

// Unreturned books + details
async function getUnreturnedBooksDetails() {
    const query = `select inventories.id as inventory_id,
    books.title as book_title,
    users.id as user_id, 
    concat(users.firstname, ' ', users.lastname) as name,
    records.borrow_date,
    records.borrow_date + (interval '1' day * inventories.loan_period) as due_date,
    extract (day from current_timestamp - (records.borrow_date + (interval '1' day * inventories.loan_period))) as days_late
from users inner join subscriptions on subscriptions.user_id = users.id
inner join records on records.subscription_id = subscriptions.id
inner join inventories on records.inventory_id = inventories.id
inner join books on inventories.book_id = books.id
where return_date is null and
records.borrow_date + (interval '1' day * inventories.loan_period) < current_timestamp`;
    return db.query(query);
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
    editSubscription,
    createRecord,
    editRecord,
    getMostPopularBooks,
    getMostPopularAuthors,
    getIncomeReport,
    getMostActiveUsers,
    getMostPopularCategories,
    getMostPopularPublishers,
    getAverageTimeToReadBook,
    getUnreturnedBooksAndPenalties,
    getUnreturnedBooksDetails
};