const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define('users', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    national_id: {
        type: Sequelize.STRING
    },
    birthdate: {
        type: Sequelize.DATE
    },
    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = User;