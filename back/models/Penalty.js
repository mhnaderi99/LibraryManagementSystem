const Sequelize = require("sequelize");
const db = require("../config/database");

const Penalty = db.define('penalties', {
    record_id: {
        type: Sequelize.INTEGER
    },

    amount: {
        type: Sequelize.INTEGER
    },

    payment_id: {
        type: Sequelize.INTEGER
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Penalty;