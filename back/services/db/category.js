const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Category = require('../../models/Category');

function getCategoryByName(categoryName, page, categoriesInPage) {
    const offset = categoriesInPage * (page - 1);
    const limit = categoriesInPage;
    return Author.findAll({
            offset: offset,
            limit: limit,
            where: { name: categoryName }
        })
        .then((foundCategory) => {
            return foundCategory;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

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

function editCategory(editedFields, categoryId) {
    return Category.update(editedFields, { where: { id: categoryId } })
        .then((editedCategory) => {
            return editedCategory;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

function deleteCategory(categoryId) {
    return Category.destroy({ where: { id: categoryId } })
        .then((deleteCategory) => {
            return deleteCategory;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

module.exports = {
    getCategoryByName,
    getAllCategories,
    createCategory,
    editCategory,
    deleteCategory
};