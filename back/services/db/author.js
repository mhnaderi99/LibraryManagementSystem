const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Author = require('../../models/Author');

function findAuthorByName(authorName, page, authorsInPage) {
    const offset = authorsInPage * (page - 1);
    const limit = authorsInPage;
    const Op = Sequelize.Op;
    return Author.findAll({
            offset: offset,
            limit: limit,
            where: {
                firstname: {
                    [Op.like]: '%' + authorName + '%'
                },
                lastname: {
                    [Op.like]: '%' + authorName + '%'
                }
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

function findAuthorByNationality(authorNationality, page, authorsInPage) {
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
    findAuthorByName,
    findAuthorByNationality,
    getAllAuthors,
    createAuthor,
    editAuthor
};