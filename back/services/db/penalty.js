const express = require('express');
const router = express.Router();
const db = require('../../config/database');
const Penalty = require('../../models/Penalty');
const Sequelize = require("sequelize");