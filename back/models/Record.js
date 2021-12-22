const Sequelize = require("sequelize");
const db = require("../config/database");

const Record = db.define('records', {
    subscription_id: {
        type: Sequelize.INTEGER
    },

    inventory_id: {
        type: Sequelize.INTEGER
    },
    borrow_date: {
        type: Sequelize.DATE
    },

    extension_date: {
        type: Sequelize.DATE
    },
    return_date: {
        type: Sequelize.DATE
    },
    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Record;