const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Author = require('../../models/Payment');
const Sequelize = require("sequelize");