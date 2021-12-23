const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Payment = require('../../models/Payment');
const Sequelize = require("sequelize");

function createPayment(newPayment) {
    return Payment.create(newPayment)
        .then((createdPayment) => {
            console.log(createdPayment);
            return createdPayment;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editPayment(editedFields, paymentId) {
    return Payment.update(editedFields, { where: { id: paymentId } })
        .then((editedPayment) => {
            return editedPayment;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function deletePayment(paymentId) {
    return Payment.destroy({ where: { id: paymentId } })
        .then((deletedPayment) => {
            return deletedPayment;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    createPayment,
    editPayment,
    deletePayment
};