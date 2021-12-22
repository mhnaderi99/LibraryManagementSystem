const Sequelize = require("sequelize");
const db = require("../config/database");

const Subscription = db.define('subscriptions', {
    user_id: {
        type: Sequelize.INTEGER
    },

    payment_id: {
        type: Sequelize.INTEGER
    },
    from_date: {
        type: Sequelize.DATE
    },

    to_date: {
        type: Sequelize.DATE
    },
    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Subscription;