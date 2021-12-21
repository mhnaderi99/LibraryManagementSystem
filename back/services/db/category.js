const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Category = require('../../models/Category');

function getAllCategories() {
    return Category.findAll({
            order: [
                ['name', "ASC"]
            ]
        })
        .then((categories) => { return categories; })
        .catch(err => {
            console.log(err);
            return null;
        });
}


function createCategory(newCategory) {
    return Category.create(newCategory)
        .then((createdCategory) => {
            console.log(createdCategory);
            return createdCategory;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getAllCategories,
    createCategory
};