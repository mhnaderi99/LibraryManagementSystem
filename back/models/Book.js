const Sequelize = require("sequelize");
const db = require("../config/database");

const Book = db.define('books', {
    title: {
        type: Sequelize.STRING
    },

    author_id: {
        type: Sequelize.INTEGER
    },

    category_id: {
        type: Sequelize.INTEGER
    },

    ISBN: {
        type: Sequelize.INTEGER
    },

    publisher_id: {
        type: Sequelize.INTEGER
    },

    pages: {
        type: Sequelize.INTEGER
    },

    year: {
        type: Sequelize.INTEGER
    },

    createdat: {
        type: Sequelize.DATE
    },

    updatedat: {
        type: Sequelize.DATE
    }
});

module.exports = Book;