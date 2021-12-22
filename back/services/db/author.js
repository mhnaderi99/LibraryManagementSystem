const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Author = require('../../models/Author');
const Sequelize = require("sequelize");

function getAuthorByName(authorName, page, authorsInPage) {
    const offset = authorsInPage * (page - 1);
    const limit = authorsInPage;
    return Author.findAll({
            offset: offset,
            limit: limit,
            where: {
                $or: [{
                        firstname: {
                            [Sequelize.Op.iLike]: "%" + authorName + "%"
                        }
                    },
                    {
                        lastname: {
                            [Sequelize.Op.iLike]: "%" + authorName + "%"
                        }
                    }
                ]

            }
        })
        .then((foundAuthor) => {
            return foundAuthor;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function getAuthorByNationality(authorNationality, page, authorsInPage) {
    const offset = authorsInPage * (page - 1);
    const limit = authorsInPage;
    return Author.findAll({
            offset: offset,
            limit: limit,
            where: { nationality: authorNationality }
        })
        .then((foundAuthor) => {
            return foundAuthor;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

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

function editAuthor(editedFields, authorId) {
    return Author.update(editedFields, { where: { id: authorId } })
        .then((editedAuthor) => {
            return editedAuthor;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getAuthorByName,
    getAuthorByNationality,
    getAllAuthors,
    createAuthor,
    editAuthor
};