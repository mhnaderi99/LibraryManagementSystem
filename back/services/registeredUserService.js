const Books = require('./db/book');
const Authors = require('./db/author');
const Categories = require('./db/category');
const Publishers = require('./db/publisher');
const db = require('../config/registered_user_db');

async function borrowBook(inventory_id, userid) {
    const query = `CALL public.borrow_inventory(${inventory_id},${userid});`
    return db.query(query).then((success) => {
            console.log(success);
            return success;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

async function returnBook(inventoryid, userid) {
    const query = `CALL public.return_inventory(${inventoryid},${userid});`
    return db.query(query).then((success) => {
            console.log(success);
            return success;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}
async function extendSubscription() {
    // TODO: extend subscription
}
async function payForPenalty() {
    // TODO: pay for penalty
}

module.exports = {
    borrowBook,
    returnBook
};