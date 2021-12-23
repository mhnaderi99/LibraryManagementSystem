const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Inventory = require('../../models/Inventory');
const Sequelize = require("sequelize");

function createInventoryItem(newItem) {
    return Inventory.create(newItem)
        .then((createdItem) => {
            console.log(createdItem);
            return createdItem;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function editInventoryItem(editedFields, itemId) {
    return Inventory.update(editedFields, { where: { id: itemId } })
        .then((editedItem) => {
            return editedItem;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function deleteInventoryItem(itemId) {
    return Inventory.destroy({ where: { id: itemId } })
        .then((deletedItem) => {
            return deletedItem;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    createInventoryItem,
    editInventoryItem,
    deleteInventoryItem
};