const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Penalty = require('../../models/Penalty');
const Sequelize = require("sequelize");


function createPenalty(newPenalty) {
    return Penalty.create(newPenalty)
        .then((createdPenalty) => {
            console.log(createdPenalty);
            return createdPenalty;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editPenalty(editedFields, penaltyId) {
    return Penalty.update(editedFields, { where: { id: penaltyId } })
        .then((editedPenalty) => {
            return editedPenalty;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}


module.exports = {
    createPenalty,
    editPenalty
};