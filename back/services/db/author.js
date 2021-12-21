const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Author = require('../../models/Author');

function getAllAuthors(page, authorsInPage) {
    const offset = authorsInPage * (page - 1);
    const limit = authorsInPage;
    return Author.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['lastname', "ASC"],
                ['firstname', 'ASC']
            ]
        })
        .then((authors) => { return authors; })
        .catch(err => {
            console.log(err);
            return null;
        });
}


function createAuthor(newAuthor) {
    return Author.create(newAuthor)
        .then((createdAuthor) => {
            console.log(createdAuthor);
            return createdAuthor;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getAllAuthors,
    createAuthor
};