const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Author = require('../../models/Penalty');
const Sequelize = require("sequelize");