const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const User = require('../../models/User');
const Sequelize = require("sequelize");

function createUser(newUser) {
    return User.create(newUser)
        .then((createdUser) => {
            console.log(createdUser);
            return createdUser;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editUser(editedFields, userId) {
    return User.update(editedFields, { where: { id: userId } })
        .then((editedUser) => {
            return editedUser;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function deleteUser(userId) {
    return User.destroy({ where: { id: userId } })
        .then((deletedUser) => {
            return deletedUser;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    createUser,
    editUser,
    deleteUser
};