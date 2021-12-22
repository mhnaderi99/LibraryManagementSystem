const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Book = require('../../models/Book');
const Sequelize = require("sequelize");
const Asc = require("../../models/associations")

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

function getBookByTitle(bookTitle, page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;
    return Book.findAll({
            offset: offset,
            limit: limit,
            where: { title: bookTitle }
        })
        .then((foundBook) => {
            return foundBook;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function getBookByAuthor(bookAuthor, page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;

    return Asc.Book.findAll({
            attributes: ["title", "ISBN", "author.firstname", "author.lastname", "year"],
            include: [{
                model: Asc.Author,
                required: true,
                attributes: []
            }],
            raw: true,
            where: {
                [Sequelize.Op.or]: [{
                        '$author.firstname$': {
                            [Sequelize.Op.iLike]: "%" + bookAuthor + "%"
                        }
                    },
                    {
                        '$author.lastname$': {
                            [Sequelize.Op.iLike]: "%" + bookAuthor + "%"
                        }
                    }
                ]

            }
        }).then(foundBooks => {
            console.log(foundBooks)
            return foundBooks;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function getBookByCategory(bookCategory, page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;
    // TODO
}

function getBookByPublisher(bookPublisher, page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;
    // TODO
}

function getBookByYear(bookYear, page, booksInPage) {
    const offset = booksInPage * (page - 1);
    const limit = booksInPage;
    return Book.findAll({
            offset: offset,
            limit: limit,
            where: { year: bookYear }
        })
        .then((foundBook) => {
            return foundBook;
        })
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

function editBook(editedFields, bookId) {
    return Book.update(editedFields, { where: { id: bookId } })
        .then((editedBook) => {
            return editedBook;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function deleteBook(bookId) {
    return Book.destroy({ where: { id: bookId } })
        .then((deleteBook) => {
            return deleteBook;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getAllBooks,
    getBookByTitle,
    getBookByAuthor,
    getBookByCategory,
    getBookByPublisher,
    getBookByYear,
    createBook,
    editBook,
    deleteBook
};