const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Book = require('../../models/Book');

function getAllBooks(page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;
    return Book.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['year', "DESC"],
                ['pages', 'DESC']
            ]
        })
        .then((books) => { return books; })
        .catch(err => {
            console.log(err);
            return null;
        });
}


function createBook(newBook) {
    return Book.create(newBook)
        .then((createdBook) => {
            console.log(createdBook);
            return createdBook;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getAllBooks,
    createBook
};