const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Publisher = require('../../models/Publisher');

function getPublisherByName(publisherName, page, publishersInPage) {
    const offset = publishersInPage * (page - 1);
    const limit = publishersInPage;
    return Publisher.findAll({
            offset: offset,
            limit: limit,
            where: { name: publisherName }
        })
        .then((foundPublisher) => {
            return foundPublisher;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function getAllPublishers(page, publishersInPage) {
    const offset = publishersInPage * (page - 1);
    const limit = publishersInPage;
    return Publisher.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['name', "ASC"]
            ]
        })
        .then((publishers) => { return publishers; })
        .catch(err => {
            console.log(err);
            return null;
        });
}


function createPublisher(newPublisher) {
    return Publisher.create(newPublisher)
        .then((createdPublisher) => {
            console.log(createdPublisher);
            return createdPublisher;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editPublisher(editedFields, publisherId) {
    return Publisher.update(editedFields, { where: { id: publisherId } })
        .then((editedPublisher) => {
            return editedPublisher;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}
module.exports = {
    getPublisherByName,
    getAllPublishers,
    createPublisher,
    editPublisher
};