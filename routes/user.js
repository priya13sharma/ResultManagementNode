const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const database = require('../database');

router.get('/login', userController.form);

module.exports = router;