const Sequelize = require("sequelize");
const db = require("../config/database");

const Publisher = db.define('publishers', {
    name: {
        type: Sequelize.STRING
    },

    phone: {
        type: Sequelize.STRING
    },

    address: {
        type: Sequelize.STRING
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Publisher;