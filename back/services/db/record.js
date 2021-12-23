const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Record = require('../../models/Record');
const Sequelize = require("sequelize");



function createRecord(newRecord) {
    return Record.create(newRecord)
        .then((createdRecord) => {
            console.log(createdRecord);
            return createdRecord;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editRecord(editedFields, RecordId) {
    return Record.update(editedFields, { where: { id: RecordId } })
        .then((editedRecord) => {
            return editedRecord;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}


module.exports = {
    createRecord,
    editRecord
};