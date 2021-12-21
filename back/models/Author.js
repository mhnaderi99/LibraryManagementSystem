const Sequelize = require("sequelize");
const db = require("../config/database");

const Author = db.define('authors', {
    firstname: {
        type: Sequelize.STRING
    },

    lastname: {
        type: Sequelize.STRING
    },

    nationality: {
        type: Sequelize.STRING
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Author;