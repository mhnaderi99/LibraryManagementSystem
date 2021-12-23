const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Subscription = require('../../models/Subscription');
const Sequelize = require("sequelize");


function createSubscription(newSubscription) {
    return Subscription.create(newSubscription)
        .then((createdSubscription) => {
            console.log(createdSubscription);
            return createdSubscription;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editSubscription(editedFields, SubscriptionId) {
    return Subscription.update(editedFields, { where: { id: SubscriptionId } })
        .then((editedSubscription) => {
            return editedSubscription;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}


module.exports = {
    createSubscription,
    editSubscription
};