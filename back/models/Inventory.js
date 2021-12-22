const Sequelize = require("sequelize");
const db = require("../config/database");

const Inventory = db.define('inventories', {
    book_id: {
        type: Sequelize.INTEGER
    },

    loan_period: {
        type: Sequelize.INTEGER
    },

    delay_penalty: {
        type: Sequelize.INTEGER
    },

    is_available: {
        type: Sequelize.BOOLEAN
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Inventory;