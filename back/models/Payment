const Sequelize = require("sequelize");
const db = require("../config/database");

const Payment = db.define('payments', {
    user_id: {
        type: Sequelize.INTEGER
    },

    amount: {
        type: Sequelize.INTEGER
    },

    payment_date: {
        type: Sequelize.DATE
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Payment;