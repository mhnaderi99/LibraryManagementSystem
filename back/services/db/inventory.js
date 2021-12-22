const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Inventory = require('../../models/Inventory');
const Sequelize = require("sequelize");